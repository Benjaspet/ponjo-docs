# Fakebook Web Crawler

---

[[toc]]

## Introduction

A web crawler (sometimes known as a robot, a spider, or a scraper) is a piece of software that 
automatically gathers and traverses documents on the web. For example, lets say you have a crawler 
and you tell it to start at https://www.wikipedia.com. The software will first download the 
Wikipedia homepage, then it will parse the HTML and locate all hyperlinks (i.e., anchor tags) 
embedded in the page. The crawler then downloads all the HTML pages specified by the URLs on the 
homepage, and parses them looking for more hyperlinks. This process continues until all of the 
pages on Wikipedia are downloaded and parsed.

Web crawlers are a fundamental component of today’s web. For example, Googlebot is Google’s web 
crawler. Googlebot is constantly scouring the web, downloading pages in search of new and updated 
content. All of this data forms the backbone of Google’s search engine infrastructure.

## Project Task

For this project, we were given a large-scale mock social networking site called Fakebook. The site
contained a login page, user profiles, and a feed page. Our task was to find a total of 5 secret
flags embedded into the HTML of random user profiles.

Now, the naive approach is to manually search page by page. This is evidently not ideal, as the
site contains tens of thousands of user profiles. Instead, we can automate this process by 
developing a web crawler.

## Implementation

I had to keep track of the pages that the crawler had already visited. This was important for two
primary reasons:

- Obviously, it isn’t efficient to revisit the same pages over and over again. If I was to not keep
track of where it had been, I would visit pages multiple times, which is not ideal by any means.
- Secondly, and more importantly, not keeping track of visited pages can lead to infinite loops.
For example, if user A is friends with user B, then A’s page links to B, and B’s page links to A.
I had to design my crawler in a way that would prevent it from pin-ponging back and forth from
A->B, B->A, A->B, B->A, etc.

### Approach

I used a queue-based system to managed visited and unvisited pages. If a page was not yet visited,
I would add it to the queue. If a page was visited, I would skip it. This way, I could ensure that
the crawler would not visit the same page twice. The sample code below shows how I implemented this
for `GET` requests, where I would process a profile page:

```python
# Send a GET request to the server and return the response. If cookies are available (i.e. for
# any request other than the login request), include them in the headers. The response is then
# processed and the status code is checked to determine the next action to take.
def send_get_request(self, url):
    # Mark the URL as visited and remove it from the queue.
    self.visited.add(url)
    if url in self.queue:
        self.queue.remove(url)
    # Parse the URL to check if it matches the expected hostname and port.
    parsed_url = urlparse(url)
    # Construct the HTTP GET request line by line.
    headers = [
        f"GET {parsed_url.path} HTTP/1.1",
        f"Host: {self.server}",
        "Connection: Close"
    ]
    # Include cookies if available.
    if self.get_cookie_data():
        headers.append("Cookie: " + self.get_cookie_data())
    request = "\r\n".join(headers) + "\r\n\r\n"
    # Send the request and return the response.
    return self.send_req(request, url)      
```

This approach worked very well. I then needed to handle HTTP status codes where the server would
request a redirect or return a 503 status code. I implemented a robust error-handling mechanism to
handle these cases, like so:

```python
# Handle the status code of the response and determine the next action to take.
# If it is a 200, return the response. If it is a 302, redirect to the new URL.
# If it is a 403 or 404, skip it. If it is a 503, retry the URL. If it is a 500 or 504,
# print an error message and exit the program. Otherwise, print an error message and exit.
def process_status_code(self, response, url):
    status_code = int(response["status"])
    if status_code == 200:
        return response
    elif status_code == 302:
        self.redirect(response, url)
    elif status_code == 403 or status_code == 404:
        return None
    elif status_code == 503:
        self.retry(url)
    elif status_code == 500 or status_code == 504:
        print("ERROR: Internal server error encountered.")
        exit(1)
    else:
        print(f"ERROR: Unexpected status code {status_code} encountered.")
        exit(1)
```

The base implementation worked and found all flags in ~30 minutes. But I wanted faster.
So, what other way to optimize this than to use multithreading? I was able to reduce the time
down to an average of 5-7 minutes this way.

```python
# Continuously crawl the pages until 5 flags are found.
while len(self.flags) < 5:
    try:
        # Use locks to prevent STDOUT corruption from multiple threads.
        with threading.Lock():
            runtime_ms = (time.time() - self.start_time) * 1000
                rt = self.format_runtime(runtime_ms)
                # If the verbose flag is set, print debug information.
                if self.verbose:
                    flags_found = "Flags Found: %2d" % len(self.flags)
                    visited = "Visited: %5d" % len(self.visited)
                    to_visit = "To Visit: %5d" % len(self.queue)
                    print(f"{flags_found} | {visited} | {to_visit} | {rt}")
            # Create the threads and start them.
            threads = []
            for p in parsers:
                # Create a thread for each parser and start it.
                thread = threading.Thread(target=self.crawl, args=(p,))
                threads.append(thread)
                thread.start()
            # Join the threads to wait for them to finish.
            for thread in threads:
                thread.join()
        # Handle keyboard interrupts and general exceptions.
        except KeyboardInterrupt:
            print("Exiting...")
            return
        except Exception as e:
            print(f"ERROR: {e}")
            return
```

## Formatting The Output

For debugging purposes and to provide a visual representation of the crawler’s progress, I formatted
the output to display the number of flags found, the number of pages visited, the number of pages
left to visit, and the runtime of the crawler. This was especially useful when running the crawler
in verbose mode, as it provided a real-time view of the crawler’s progress. If a flag was found,
the output would also display the flag itself.

```txt
Flags Found:  0 | Visited:     1 | To Visit:     1 | Runtime: 0m 0s 927ms
Flags Found:  0 | Visited:     2 | To Visit:    10 | Runtime: 0m 1s 344ms
Flags Found:  0 | Visited:    12 | To Visit:    10 | Runtime: 0m 1s 808ms
Flags Found:  0 | Visited:    22 | To Visit:   196 | Runtime: 0m 2s 285ms
Flags Found:  0 | Visited:    32 | To Visit:   221 | Runtime: 0m 2s 896ms
Flags Found:  0 | Visited:    42 | To Visit:   306 | Runtime: 0m 3s 415ms
Flags Found:  0 | Visited:    52 | To Visit:   322 | Runtime: 0m 4s 2ms
Flags Found:  0 | Visited:    62 | To Visit:   430 | Runtime: 0m 4s 497ms

6cebb2d7f4acde287418115dd554fc7e4cd9f346536b402abdd19b18981d4fd7

Flags Found:  1 | Visited:    72 | To Visit:   440 | Runtime: 0m 5s 86ms
Flags Found:  1 | Visited:    82 | To Visit:   539 | Runtime: 0m 5s 597ms
Flags Found:  1 | Visited:    92 | To Visit:   556 | Runtime: 0m 6s 170ms
Flags Found:  1 | Visited:   102 | To Visit:   620 | Runtime: 0m 6s 730ms
Flags Found:  1 | Visited:   112 | To Visit:   660 | Runtime: 0m 7s 289ms
Flags Found:  1 | Visited:   122 | To Visit:   712 | Runtime: 0m 7s 917ms
```

## Source Code

The full source code for this project can be found [in its GitHub repository](https://github.com/benjaspet/cs3700).

## Project README

### High-Level Approach

For my high-level approach, I first started by logging into the server. To do this,
I had to manipulate the login form in such a way that I could extract the CSRF token
and the session cookie. Once I had these, I could then use them to log in. I stored the
cookie in a class variable so that I only needed to log in to Fakebook once, and could
include that cookie in the header of all future requests.

The next step I took from here after logging in was to extract the links of friend profiles
from the pages my crawler visits. I did this by creating a custom HTML parser and overrode its `handle_starttag` method
to extract the `href` attribute from all `a` tags on the page. In the same HTML parser,
I also overrode the `handle_data` method to extract the flags from the data that contains `FLAG:`
by splitting the data by `: ` and adding the second element to the list of flags (as
that is a flag).

Once I had the links, I had to keep track of the frontier (which I used a deque for) and the
links that have already been visited (which I used a set for, because they can be iterated through
much easier than a queue can be iterated through). I then iterated through the links
and visited each one, extracting the links from each page and adding them to the frontier if they
had not already been visited. I also extracted the flags from each page and added them to a list.
I chose to print the flags out as my crawler goes instead of printing them all at the end.

I then implemented my handler for status codes. If the status code was a 200, I parsed the links
from the page as normaly and checked for flags. If the status code was a 302, I would extract the
location header (to find the redirect link) and add it to the frontier if it had not already been
visited, and would visit it later. If the status code was a 403 or 404, I would simply skip the
link and move on to the next one. If the status code was a 503, I would simply wait and
add the link to the end of the queue to visit later. For 500s and 504s, I would simply skip the
link because the error would be due to an internal server error or an infrastructure error.

### Challenges

The primary challenge I faced when completing this assignment was figuring out how to reverse-engineer
the login form in order to log into Fakebook. I was able to find the CSRF middleware token
by simply inspecting the login form, but it took me a while to figure out what exactly to do with it
and how to use it alongside the session ID. Handling status codes was not too big of an issue for me,
but I also had trouble with figuring out which data structures to use for the frontier and the visited
set and how to update them correctly. I also had trouble with the HTML parser, as I had never used one
before and had to figure out how to use it correctly.

### Testing

Testing for this project took a lot of time. I created a logger (which can be visualized and activate
by using the -verbose option) to print the current runtime, the length of the queue, the amount of flags found,
and the length of the visited set. Logging into the Fakebook server proved to be the most difficult, so to debug and
test this I printed out the CSRF token and the session ID first to make sure I could parse them correctly. I then
printed out the headers of the response to see that I was passing correct headers, and by printing out the raw response
and the headers I was able to parse the response easier. Overall, for testing, I printed out data at various points
in the code to make sure that I was extracting the correct data and used the printed responses with their status codes
to debug.
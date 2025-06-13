from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        return super().end_headers()

    def log_message(self, format, *args):
        # Print log messages to stderr
        sys.stderr.write("%s - - [%s] %s\n" %
                        (self.address_string(),
                         self.log_date_time_string(),
                         format % args))

    def do_GET(self):
        # Log the incoming request
        print(f"\n=== New Request ===")
        print(f"Path: {self.path}")
        print(f"Headers: {self.headers}")
        
        # Map root to index.html
        if self.path == '/':
            self.path = '/index.html'
        
        # Handle clean URLs (without .html)
        file_path = self.path.lstrip('/')
        if not any(file_path.endswith(ext) for ext in ['.html', '.css', '.js', '.jpg', '.jpeg', '.png', '.gif', '.ico']):
            if os.path.exists(os.path.join(os.getcwd(), file_path + '.html')):
                self.path = f'/{file_path}.html'
                print(f"Rewriting path to: {self.path}")
            else:
                print(f"File not found: {file_path}")
        
        # Check if file exists
        file_to_serve = os.path.join(os.getcwd(), self.path.lstrip('/'))
        if not os.path.exists(file_to_serve):
            print(f"File not found: {file_to_serve}")
            self.send_error(404, f"File not found: {self.path}")
            return
            
        print(f"Serving file: {file_to_serve}")
        return SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print("Server running at http://localhost:8000")
    httpd.serve_forever()

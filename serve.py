# Local preview only (you don't upload this file). Run:  python3 serve.py   then open http://localhost:8000
# Like GitHub Pages, it lets /piece-01 open piece-01.html, so addresses look the same as on your live site.
import http.server, os
class H(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        p = super().translate_path(path)
        if not os.path.exists(p) and not os.path.splitext(p)[1] and os.path.exists(p + '.html'):
            return p + '.html'
        return p
os.chdir(os.path.dirname(os.path.abspath(__file__)))
print('Open http://localhost:8000'); http.server.ThreadingHTTPServer(('', 8000), H).serve_forever()

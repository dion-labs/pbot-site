// Keep the public domain on the current Git-built Pages deployment.
const router = {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'pbot-site.pages.dev';
    const response = await fetch(new Request(url, request));
    return new Response(response.body, response);
  },
};

export default router;

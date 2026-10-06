"use server";

export async function fetchMeta(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch");
    
    const html = await res.text();
    
    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    let title = titleMatch ? titleMatch[1] : "";
    
    // Extract description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) || 
                      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i) ||
                      html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    
    let desc = descMatch ? descMatch[1] : "";
    
    // Fallbacks
    if (!title) {
      title = new URL(url).hostname.replace('www.', '');
    }
    if (!desc) {
      desc = "A custom project added via URL integration. No meta description found on the page.";
    }
    
    return { title, desc };
  } catch (e) {
    return { 
      title: new URL(url).hostname.replace('www.', ''), 
      desc: "A custom project added via URL integration. The page couldn't be analyzed." 
    };
  }
}

export async function itunesApiRequest(term, media = "all") {
 const url = new URL("https://itunes.apple.com/search");
 const params = {
  country: "US",
  lang: "en",
  limit: 50,
  term,
  media,
 };
 try {
  url.search = new URLSearchParams(params);
  const response = await fetch(url);
  const data = await response.json();
  return data;
 } catch (error) {
  console.error(error);
 }
}

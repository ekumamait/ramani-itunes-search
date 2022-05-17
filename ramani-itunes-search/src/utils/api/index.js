export async function itunesApiRequest(
 term,
 media = "all",
 setLoading,
 setErrorMessage
) {
 let loading = true;
 let errorMessage = null;
 setLoading(loading);
 setErrorMessage(errorMessage);
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
  loading = false;
  setLoading(loading);
  setErrorMessage(null);
  return { data, loading };
 } catch (error) {
  loading = false;
  setLoading(loading);
  setErrorMessage(error.message);
  console.error(error);
 }
}

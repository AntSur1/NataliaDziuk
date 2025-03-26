function toggleLanguage() {
  const currentUrl = window.location.href;
  let newUrl;

  console.log(6);
  console.log(window.location.pathname);
  if (window.location.pathname == "/") {
    console.log("debug");
    newUrl = currentUrl.replace(currentUrl, currentUrl +"en/index");
  }
  else if (currentUrl.includes("/en/")) {
    // If the URL contains "/en/", remove it and redirect to Polish version
    newUrl = currentUrl.replace("/en/", "/");
  } 
  else {
    // If the URL doesn't contain "/en/", add "/en/" to the path and redirect to English version
    if (currentUrl.includes("/")) {
      newUrl = currentUrl.replace(window.location.pathname, "/en" + window.location.pathname);
    } 
    else {
      newUrl = currentUrl + "/en";
    }
  }

  // Redirect to the new URL
  window.location.href = newUrl;
}
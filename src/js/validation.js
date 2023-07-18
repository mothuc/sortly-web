function validateLink(input, message) {
  const urlPattern =
    /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?([\/\w.-]*)*\/?$/i;

  if (input === "") {
    message.textContent = "Please enter something";
    return false;
  }

  if (urlPattern.test(input)) {
    message.textContent = "";
    alert("Link validation success!");
    return true;
  } else {
    message.textContent = "Please enter a valid URL";
    return false;
  }
  return true;
}

const links = [];

const shortenBtn = document.querySelector("#shorten");
shortenBtn.addEventListener("click", function () {
  const inputLink = document.querySelector("#input-link").value;
  const message = document.querySelector("#message");
  const isValid = validateLink(inputLink, message);

  if (isValid) {
    const newLink = {
      mainLink: inputLink,
      shortLink: "https://rel.ink/abc123",
    };
    
    links.push(newLink);
    updateLinks("#links", links);
  }
});

function updateLinks(containerSelector, links) {
  const linksContainer = document.querySelector(containerSelector);
  const lastThreeLinks = links.slice(-3).reverse();

  linksContainer.innerHTML = ""

  lastThreeLinks.forEach((link) => {
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("link-container");

    const mainLinkElement = document.createElement("p");
    mainLinkElement.classList.add("link-main");
    mainLinkElement.textContent = link.mainLink;

    const shortLinkBox = document.createElement("div");
    shortLinkBox.classList.add("short-link-box");

    const shortLinkResult = document.createElement("p");
    shortLinkResult.classList.add("short-link-result");
    shortLinkResult.textContent = link.shortLink;

    const copyButton = document.createElement("button");
    copyButton.classList.add("short-link-button");
    copyButton.textContent = "Copy";

    shortLinkBox.appendChild(shortLinkResult);
    shortLinkBox.appendChild(copyButton);
    linkContainer.appendChild(mainLinkElement);
    linkContainer.appendChild(shortLinkBox);

    linksContainer.appendChild(linkContainer);
  });
}

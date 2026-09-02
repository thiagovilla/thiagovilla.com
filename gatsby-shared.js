import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const headComponents = [
    <link
      key="purecss"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
      integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls"
      crossOrigin="anonymous"
    ></link>,
    <link
      key="purecss-grids"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"
    />,
    <link
      key="font-awesome"
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />,
    <link
      key="prismjs"
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
      integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  ];

  const crispWebsiteId = process.env.GATSBY_CRISP_WEBSITE_ID;

  if (crispWebsiteId) {
    headComponents.push(
      <script
        key="crisp-chat"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="${crispWebsiteId}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
        }}
      />
    );
  }

  setHeadComponents(headComponents);

  setPostBodyComponents([
    <div key="toast-portal" id="toast-portal"></div>,
  ]);
};

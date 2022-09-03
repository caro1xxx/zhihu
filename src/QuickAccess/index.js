import React from "react";
import "./index.css";
export const Index = () => {
  return (
    <div className="QuickBody">
      <ul className="optionItem">
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            data-new-api="StarFill24"
            data-old-api="Star"
            className="Zi Zi--Star GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path d="M10.484 3.307c.673-1.168 2.358-1.168 3.032 0l2.377 4.122a.25.25 0 00.165.12l4.655.987c1.319.28 1.84 1.882.937 2.884l-3.186 3.535a.25.25 0 00-.063.193l.5 4.733c.142 1.34-1.222 2.33-2.453 1.782l-4.346-1.938a.25.25 0 00-.204 0l-4.346 1.938c-1.231.549-2.595-.442-2.453-1.782l.5-4.733a.25.25 0 00-.064-.193L2.35 11.42c-.903-1.002-.382-2.604.937-2.884l4.655-.987a.25.25 0 00.164-.12l2.378-4.122z"></path>
          </svg>
          <div>我的收藏</div>
        </li>
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            data-new-api="UserPlusFill24"
            data-old-api="Invite"
            className="Zi Zi--Invite GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path
              d="M5.5 7.5A5.5 5.5 0 0111 2a5.5 5.5 0 015.5 5.5A5.5 5.5 0 0111 13a5.5 5.5 0 01-5.5-5.5zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 00-.545-.509 1.37 1.37 0 00-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 00.955-.929c.06-1.767.7-2.96 1.456-3.723zm5.596-2.292a.706.706 0 00-1.412 0v2.588h-2.588a.706.706 0 000 1.412h2.588v2.588a.706.706 0 101.412 0v-2.588h2.588a.706.706 0 000-1.412h-2.588v-2.588z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>我的关注</div>
        </li>
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            data-new-api="UserPlusFill24"
            data-old-api="Invite"
            className="Zi Zi--Invite GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path
              d="M5.5 7.5A5.5 5.5 0 0111 2a5.5 5.5 0 015.5 5.5A5.5 5.5 0 0111 13a5.5 5.5 0 01-5.5-5.5zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 00-.545-.509 1.37 1.37 0 00-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 00.955-.929c.06-1.767.7-2.96 1.456-3.723zm5.596-2.292a.706.706 0 00-1.412 0v2.588h-2.588a.706.706 0 000 1.412h2.588v2.588a.706.706 0 101.412 0v-2.588h2.588a.706.706 0 000-1.412h-2.588v-2.588z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>我的邀请</div>
        </li>
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            data-new-api="CardholderFill24"
            data-old-api="Balance"
            className="Zi Zi--Balance GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path
              d="M21.75 6v12.248c0 1.106-.788 2.002-1.76 2.002H4.01c-.972 0-1.76-.896-1.76-2.002V5.752c0-1.106.788-2.002 1.76-2.002h15.982c.971.001 1.758 1.145 1.758 2.25zM6 8.75a.75.75 0 000 1.5h2.483c1.353 2.991 5.681 2.991 7.034 0H18a.75.75 0 000-1.5h-2.887c-.39 0-.737.25-.86.62-.722 2.165-3.784 2.165-4.506 0a.906.906 0 00-.86-.62H6z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>我的余额</div>
        </li>
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            data-new-api="TicketFill24"
            data-old-api="Coupon"
            className="Zi Zi--Coupon GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path
              d="M2 6.13c0-1.038.808-1.88 1.805-1.88h16.39c.997 0 1.805.842 1.805 1.88v2.588a.45.45 0 01-.34.42c-.877.248-2.16 1.049-2.16 2.862 0 1.813 1.283 2.614 2.16 2.862a.45.45 0 01.34.42v2.587c0 1.039-.808 1.881-1.805 1.881H3.803C2.807 19.749 2 18.907 2 17.87v-2.535c0-.221.18-.399.397-.439.875-.163 2.103-.88 2.103-2.896 0-2.015-1.228-2.733-2.103-2.896C2.18 9.064 2 8.886 2 8.665V6.131zm7 5.12a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>我的礼券</div>
        </li>
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            data-new-api="TextBubbleFill24"
            data-old-api="Community"
            className="Zi Zi--Community GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path
              d="M4.4 3A2.4 2.4 0 002 5.4v10.5a2.4 2.4 0 002.4 2.4h8.292l3.073 3.353a.8.8 0 001.387-.475l.24-2.878H19.6a2.4 2.4 0 002.4-2.4V5.4A2.4 2.4 0 0019.6 3H4.4zm2.1 4.75a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm-.75 4.75a.75.75 0 01.75-.75h4.495a.75.75 0 010 1.5H6.5a.75.75 0 01-.75-.75z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>站务中心</div>
        </li>
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            data-new-api="HeadMicrophoneFill16"
            data-old-api="HeadMicrophoneFill16"
            className="ZDI ZDI--HeadMicrophoneFill16 GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path
              d="M8 2.763a4.376 4.376 0 00-4.33 3.744h.065c.861 0 1.559.697 1.559 1.558v2.595c0 .861-.698 1.559-1.559 1.559A2.485 2.485 0 011.25 9.733v-.741c0-.867.444-1.63 1.117-2.075a5.638 5.638 0 0111.266 0 2.483 2.483 0 011.117 2.075v.741c0 1.19-.836 2.184-1.952 2.428a5.077 5.077 0 01-4.242 2.283H8a.631.631 0 010-1.263h.556c1.116 0 2.12-.478 2.818-1.241a1.557 1.557 0 01-.668-1.28V8.065a1.558 1.558 0 011.624-1.558A4.376 4.376 0 008 2.763z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>帮助与客服</div>
        </li>
        <li>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            data-new-api="CopyrightFill24"
            data-old-api="Copyright"
            className="Zi Zi--Copyright GlobalSideBar-navIcon"
            fill="currentColor"
          >
            <path
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-9.114-4.957a4.59 4.59 0 00-3.292.816 5 5 0 00-1.937 2.868 5.227 5.227 0 00.333 3.483 4.865 4.865 0 002.453 2.41 4.557 4.557 0 003.384.104 4.827 4.827 0 002.583-2.26.75.75 0 00-1.32-.712 3.327 3.327 0 01-1.777 1.562c-.74.27-1.547.245-2.273-.07a3.366 3.366 0 01-1.692-1.672 3.727 3.727 0 01-.236-2.48 3.5 3.5 0 011.35-2.01 3.09 3.09 0 012.219-.553c.774.107 1.495.51 2.022 1.146a.75.75 0 001.155-.958 4.703 4.703 0 00-2.972-1.674z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>版权服务中心</div>
        </li>
      </ul>
    </div>
  );
};

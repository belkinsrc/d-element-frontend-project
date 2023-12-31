import { commonComponentProps } from "../../../shared/lib/index.js";

export const DeleteFromCart = (idProduct) => {
  const baseClass = "card";

  const getClassName = (elem = "", mod = {}) => {
    return commonComponentProps.getCN(baseClass, elem, mod);
  }

  return `
      <div class="${getClassName("delete-from-cart")}" data-delete-from-cart="${idProduct}">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 1L1 21M21 21L1 1L21 21Z" stroke="#222222" stroke-width="2"/>
          </svg>
      </div>
    `;
}
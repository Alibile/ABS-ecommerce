import React from 'react'
import PropTypes from "prop-types";

const HeaderTop = ( borderStyle: string ): JSX.Element => {
  return (
    <div
      className={`header-top-wap ${
        borderStyle === "fluid-border" ? "border-bottom" : ""
      }`}
    >
      {/* <LanguageCurrencyChanger
        currency={currency}
        setCurrency={setCurrency}
        currentLanguageCode={currentLanguageCode}
        dispatch={dispatch}
      /> */}
      <div className="header-offer">
        <p>
          Free delivery on order over{" "}
          <span>
            {/*  {currency.currencySymbol + (200 * currency.currencyRate).toFixed(2)} */}
          </span>
        </p>
      </div>
    </div>
  );
};
HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
 /*  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func, */
};
export default HeaderTop
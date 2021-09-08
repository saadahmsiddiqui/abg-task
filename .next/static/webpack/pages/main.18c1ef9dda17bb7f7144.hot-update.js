"use strict";
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./src/components/Transfer/Transfer.tsx":
/*!**********************************************!*\
  !*** ./src/components/Transfer/Transfer.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Transfer; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Web3_Erc20Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Web3/Erc20Context */ "./src/Web3/Erc20Context.tsx");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\saadj\\saadjhk\\abg-task\\src\\components\\Transfer\\Transfer.tsx",
    _s = $RefreshSig$();












const validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object({
  amount: yup__WEBPACK_IMPORTED_MODULE_4__.number().required("Amount is required"),
  recipient: yup__WEBPACK_IMPORTED_MODULE_4__.string().matches(/^0x[a-fA-F0-9]{40}$/, "Invalid ETH Address").required("Recipient is required")
});
const useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100% - 64px)"
  },
  inputBox: {
    maxWidth: "500px"
  },
  input: {
    display: "block",
    marginBottom: "16px"
  },
  myBtn: {
    display: "block",
    marginBottom: "16px"
  },
  btnBox: {
    display: "flex",
    flexDirection: "column"
  }
}));
function Transfer() {
  _s();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: token,
    1: setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!router.query.token) {
      setToken('ETH');
    } else {
      setToken(token);
    }
  });
  const classes = useStyles();
  const {
    active
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
  const {
    tokens,
    selectedToken,
    setSelectedToken
  } = (0,_Web3_Erc20Context__WEBPACK_IMPORTED_MODULE_1__.useTokensContext)();
  const {
    0: isWaitingOnTransaction,
    1: setIsWaitingOnTransaction
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: ethScanLink,
    1: setEthScanLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const transForm = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: {
      amount: "",
      recipient: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (selectedToken && selectedToken.transfer) {
        setIsWaitingOnTransaction(true);
        let defaultDecimals = 18;
        if (selectedToken.decimals) defaultDecimals = selectedToken.decimals;
        selectedToken.transfer(values.recipient, ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseEther((+values.amount).toFixed(defaultDecimals))).then(res => {
          setEthScanLink(`https://ropsten.etherscan.io/tx/${res.hash}`);
          res.wait().then(value => {
            transForm.resetForm();
            setEthScanLink(null);
            setIsWaitingOnTransaction(false);

            if (selectedToken.updateNativeBalance) {
              selectedToken.updateNativeBalance();
            }
          });
        }).catch(err => {
          setIsWaitingOnTransaction(false);
          console.log(`${err.message}`);
        });
      }
    },
    validate: values => {
      let error = {};

      if (selectedToken && +values.amount > selectedToken.balance) {
        return {
          amount: "Insufficient balance."
        };
      }

      return error;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (active && tokens) {
      let all = Object.keys(tokens);
      let tkn = all.find(addr => {
        console.log(token);

        if (tokens[addr].name === token) {
          return true;
        }
      });

      if (tkn) {
        setSelectedToken(tokens[tkn]);
      } else {
        setSelectedToken(tokens[all[0]]);
      }
    }
  }, [active, tokens, token]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      onSubmit: transForm.handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: classes.inputBox,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
          helperText: transForm.touched.amount && transForm.errors.amount,
          label: `Enter ${selectedToken ? selectedToken.symbol : ""} amount`,
          value: transForm.values.amount,
          onChange: transForm.handleChange,
          error: transForm.touched.amount && Boolean(transForm.errors.amount),
          placeholder: "Enter Amount",
          className: classes.input,
          variant: "filled",
          name: "amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("small", {
          children: ["Balance:", " ", selectedToken ? selectedToken.balance.toFixed(4) : 0]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
          helperText: transForm.touched.recipient && transForm.errors.recipient,
          label: `Enter Recipient Address`,
          name: "recipient",
          value: transForm.values.recipient,
          onChange: transForm.handleChange,
          error: transForm.touched.recipient && Boolean(transForm.errors.recipient),
          className: classes.input,
          variant: "filled"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: classes.btnBox,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {
            type: "submit",
            className: classes.myBtn,
            variant: "contained",
            color: "primary",
            disabled: isWaitingOnTransaction,
            children: "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, this), ethScanLink ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {
            variant: "contained",
            color: "primary",
            target: "_blank",
            className: classes.myBtn,
            href: ethScanLink,
            children: "View on Etherscan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 29
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 9
  }, this);
}

_s(Transfer, "wKQfkSGX+q6xk2UdqF1Tr0gToiw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, useStyles, _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React, _Web3_Erc20Context__WEBPACK_IMPORTED_MODULE_1__.useTokensContext, formik__WEBPACK_IMPORTED_MODULE_3__.useFormik];
});

_c = Transfer;

var _c;

$RefreshReg$(_c, "Transfer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi4xOGMxZWY5ZGRhMTdiYjdmNzE0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxnQkFBZ0IsR0FBR0YsdUNBQUEsQ0FBVztBQUNoQ0ksRUFBQUEsTUFBTSxFQUFFSix1Q0FBQSxHQUVITSxRQUZHLENBRU0sb0JBRk4sQ0FEd0I7QUFJaENDLEVBQUFBLFNBQVMsRUFBRVAsdUNBQUEsR0FFTlMsT0FGTSxDQUVFLHFCQUZGLEVBRXlCLHFCQUZ6QixFQUdOSCxRQUhNLENBSUgsdUJBSkc7QUFKcUIsQ0FBWCxDQUF6QjtBQVlBLE1BQU1JLFNBQVMsR0FBR2xCLCtEQUFVLENBQ3ZCbUIsS0FBRCxLQUFZO0FBQ1JDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxPQUFPLEVBQUUsTUFEUDtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsQ0FGUjtBQUdGQyxJQUFBQSxjQUFjLEVBQUUsUUFIZDtBQUlGQyxJQUFBQSxVQUFVLEVBQUUsUUFKVjtBQUtGQyxJQUFBQSxNQUFNLEVBQUU7QUFMTixHQURFO0FBUVJDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFESixHQVJGO0FBV1JDLEVBQUFBLEtBQUssRUFBRTtBQUNIUCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQVhDO0FBZVJDLEVBQUFBLEtBQUssRUFBRTtBQUNIVCxJQUFBQSxPQUFPLEVBQUUsT0FETjtBQUVIUSxJQUFBQSxZQUFZLEVBQUU7QUFGWCxHQWZDO0FBbUJSRSxFQUFBQSxNQUFNLEVBQUU7QUFDSlYsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSlcsSUFBQUEsYUFBYSxFQUFFO0FBRlg7QUFuQkEsQ0FBWixDQUR3QixDQUE1QjtB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Q0FLSSw4REFBQyxzREFBRDtBQUNJLGdCQUFJLEVBQUMsUUFEVDtBQUVJLHFCQUFTLEVBQ0xPLE9BQU8sQ0FBQ1IsS0FIaEI7QUFLSSxtQkFBTyxFQUFDLFdBTFo7QUFNSSxpQkFBSyxFQUFDLFNBTlY7QUFPSSxvQkFBUSxFQUFFYSxzQkFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixFQWdCS0UsV0FBVyxnQkFDUiw4REFBQyxzREFBRDtBQUNJLG1CQUFPLEVBQUMsV0FEWjtBQUVJLGlCQUFLLEVBQUMsU0FGVjtBQUdJLGtCQUFNLEVBQUMsUUFIWDtBQUlJLHFCQUFTLEVBQ0xQLE9BQU8sQ0FBQ1IsS0FMaEI7QUFPSSxnQkFBSSxFQUNBZSxXQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURRLEdBZVIsSUEvQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUlIOztHQWhRdUJaO1VBQ0x4QixvREFXQ1MsV0FDR2QsNERBS2ZELGtFQVdjSTs7O0tBN0JFMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVHJhbnNmZXIvVHJhbnNmZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBJbnB1dCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIlxyXG5pbXBvcnQge1xyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgdXNlUmVkdWNlcixcclxuICAgIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVRva2Vuc0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vV2ViMy9FcmMyMENvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIlxyXG5cclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBhbW91bnQ6IHl1cFxyXG4gICAgICAgIC5udW1iZXIoKVxyXG4gICAgICAgIC5yZXF1aXJlZChcIkFtb3VudCBpcyByZXF1aXJlZFwiKSxcclxuICAgIHJlY2lwaWVudDogeXVwXHJcbiAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgLm1hdGNoZXMoL14weFthLWZBLUYwLTldezQwfSQvLCBcIkludmFsaWQgRVRIIEFkZHJlc3NcIilcclxuICAgICAgICAucmVxdWlyZWQoXHJcbiAgICAgICAgICAgIFwiUmVjaXBpZW50IGlzIHJlcXVpcmVkXCJcclxuICAgICAgICApLFxyXG59KVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhcclxuICAgICh0aGVtZSkgPT4gKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCJjYWxjKDEwMCUgLSA2NHB4KVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5wdXRCb3g6IHtcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15QnRuOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ0bkJveDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNmZXIoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyb3V0ZXIucXVlcnkudG9rZW4pIHtcclxuICAgICAgICAgICAgc2V0VG9rZW4oJ0VUSCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VG9rZW4odG9rZW4pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRva2VucyxcclxuICAgICAgICBzZWxlY3RlZFRva2VuLFxyXG4gICAgICAgIHNldFNlbGVjdGVkVG9rZW4sXHJcbiAgICB9ID0gdXNlVG9rZW5zQ29udGV4dCgpXHJcblxyXG4gICAgY29uc3QgW1xyXG4gICAgICAgIGlzV2FpdGluZ09uVHJhbnNhY3Rpb24sXHJcbiAgICAgICAgc2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbixcclxuICAgIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtcclxuICAgICAgICBldGhTY2FuTGluayxcclxuICAgICAgICBzZXRFdGhTY2FuTGluayxcclxuICAgIF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG5cclxuICAgIGNvbnN0IHRyYW5zRm9ybSA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudDogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICAgICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbiAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbi50cmFuc2ZlclxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHREZWNpbWFscyA9IDE4O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG9rZW4uZGVjaW1hbHMpIGRlZmF1bHREZWNpbWFscyA9IHNlbGVjdGVkVG9rZW4uZGVjaW1hbHNcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAudHJhbnNmZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5yZWNpcGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCt2YWx1ZXMuYW1vdW50KS50b0ZpeGVkKGRlZmF1bHREZWNpbWFscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEV0aFNjYW5MaW5rKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vcm9wc3Rlbi5ldGhlcnNjYW4uaW8vdHgvJHtyZXMuaGFzaH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLndhaXQoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV0aFNjYW5MaW5rKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzV2FpdGluZ09uVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2tlbi51cGRhdGVOYXRpdmVCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9rZW4udXBkYXRlTmF0aXZlQmFsYW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1dhaXRpbmdPblRyYW5zYWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2Vyci5tZXNzYWdlfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRlOiAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvciA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUb2tlbiAmJiArdmFsdWVzLmFtb3VudCA+IHNlbGVjdGVkVG9rZW4uYmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgYW1vdW50OiBcIkluc3VmZmljaWVudCBiYWxhbmNlLlwifTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmUgJiYgdG9rZW5zKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGwgPVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModG9rZW5zKVxyXG5cclxuICAgICAgICAgICAgbGV0IHRrbiA9IGFsbC5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGFkZHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vuc1thZGRyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBpZiAodGtuKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRva2VuKFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1t0a25dXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRva2VuKFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1thbGxbMF1dXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlLCB0b2tlbnMsIHRva2VuXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybS5oYW5kbGVTdWJtaXRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaW5wdXRCb3hcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YEVudGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RlZFRva2VuLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFtb3VudGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtLmhhbmRsZUNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b3VjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlciBBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWxhbmNlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRUb2tlbi5iYWxhbmNlLnRvRml4ZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVjaXBpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BFbnRlciBSZWNpcGllbnQgQWRkcmVzc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWNpcGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zRm9ybS5oYW5kbGVDaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG91Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWNpcGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2lwaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5idG5Cb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMubXlCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1dhaXRpbmdPblRyYW5zYWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXRoU2NhbkxpbmsgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMubXlCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0aFNjYW5MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdGhlcnNjYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIm1ha2VTdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVRva2Vuc0NvbnRleHQiLCJ1c2VXZWIzUmVhY3QiLCJldGhlcnMiLCJUZXh0RmllbGQiLCJ1c2VGb3JtaWsiLCJ5dXAiLCJ1c2VSb3V0ZXIiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib2JqZWN0IiwiYW1vdW50IiwibnVtYmVyIiwicmVxdWlyZWQiLCJyZWNpcGllbnQiLCJzdHJpbmciLCJtYXRjaGVzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhHcm93IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiaW5wdXRCb3giLCJtYXhXaWR0aCIsImlucHV0IiwibWFyZ2luQm90dG9tIiwibXlCdG4iLCJidG5Cb3giLCJmbGV4RGlyZWN0aW9uIiwiVHJhbnNmZXIiLCJyb3V0ZXIiLCJ0b2tlbiIsInNldFRva2VuIiwicXVlcnkiLCJjbGFzc2VzIiwiYWN0aXZlIiwidG9rZW5zIiwic2VsZWN0ZWRUb2tlbiIsInNldFNlbGVjdGVkVG9rZW4iLCJpc1dhaXRpbmdPblRyYW5zYWN0aW9uIiwic2V0SXNXYWl0aW5nT25UcmFuc2FjdGlvbiIsImV0aFNjYW5MaW5rIiwic2V0RXRoU2NhbkxpbmsiLCJ0cmFuc0Zvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJ0cmFuc2ZlciIsImRlZmF1bHREZWNpbWFscyIsImRlY2ltYWxzIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwidG9GaXhlZCIsInRoZW4iLCJyZXMiLCJoYXNoIiwid2FpdCIsInZhbHVlIiwicmVzZXRGb3JtIiwidXBkYXRlTmF0aXZlQmFsYW5jZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZSIsImVycm9yIiwiYmFsYW5jZSIsImFsbCIsIk9iamVjdCIsImtleXMiLCJ0a24iLCJmaW5kIiwiYWRkciIsIm5hbWUiLCJoYW5kbGVTdWJtaXQiLCJ0b3VjaGVkIiwiZXJyb3JzIiwic3ltYm9sIiwiaGFuZGxlQ2hhbmdlIiwiQm9vbGVhbiJdLCJzb3VyY2VSb290IjoiIn0=
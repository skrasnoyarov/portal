"use strict";(self.webpackChunkproject_course=self.webpackChunkproject_course||[]).push([[879],{"./src/features/auth/modalByUsername/ui/LoginForm/LoginForm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return LoginForm_LoginForm}});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),getLoginUsername=function(state){var _state$login;return(null===(_state$login=state.login)||void 0===_state$login?void 0:_state$login.fields.username)||""},getLoginPassword=function(state){var _state$login2;return(null===(_state$login2=state.login)||void 0===_state$login2?void 0:_state$login2.fields.password)||""},getLoginError=function(state){var _state$login3;return(null===(_state$login3=state.login)||void 0===_state$login3?void 0:_state$login3.error)||""},getLoginStatus=function(state){var _state$login4;return(null===(_state$login4=state.login)||void 0===_state$login4?void 0:_state$login4.status)||"received"},redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),User=__webpack_require__("./src/entities/User/index.ts"),i18n=__webpack_require__("./src/shared/config/i18n/index.ts"),const_localStorage=__webpack_require__("./src/shared/const/localStorage.ts"),login=(0,redux_toolkit_esm.hg)("login/login",(async function(data,_ref){var extra=_ref.extra,dispatch=_ref.dispatch,rejectWithValue=_ref.rejectWithValue;try{var response=await extra.axiosApi.post("/login",data);if(!response.data)throw new Error;return localStorage.setItem(const_localStorage.Y,JSON.stringify(response.data)),dispatch(User.hI.setUser(response.data)),response.data}catch(error){return console.error(error),rejectWithValue(i18n.Z.t("errors.simpleLoginForm"))}})),state=__webpack_require__("./src/features/auth/modalByUsername/model/state.ts"),loginSlice=(0,redux_toolkit_esm.oM)({name:"login",initialState:state.F,reducers:{setField:function(state,action){var _action$payload=action.payload,field=_action$payload.field,value=_action$payload.value;state.fields[field]=value}},extraReducers:function(builder){builder.addCase(login.pending,(function(state,action){state.status="request"})).addCase(login.fulfilled,(function(state,action){state.status="received"})).addCase(login.rejected,(function(state,action){state.status="error",state.error=action.payload}))}}),loginActions=loginSlice.actions,loginReducer=loginSlice.reducer,store=__webpack_require__("./src/app/providers/store/index.ts"),lib=__webpack_require__("./src/shared/lib/index.ts"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),Input=__webpack_require__("./src/shared/ui/Input/Input.tsx"),Text=__webpack_require__("./src/shared/ui/Text/index.ts"),LoginForm_module_simpleLoginForm="zqBx3rTR",LoginForm_module_input="yJ5kLyuN",LoginForm_module_loginBtn="vA0tmqxs",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),reducers={login:loginReducer},LoginForm=function(){var t=(0,useTranslation.$)().t,dispatch=(0,store.TL)(),username=(0,es.v9)(getLoginUsername),password=(0,es.v9)(getLoginPassword),error=(0,es.v9)(getLoginError),disabled="request"===(0,es.v9)(getLoginStatus),handleChangeField=(0,react.useCallback)((function(field){return function(value){dispatch(loginActions.setField({field:field,value:value}))}}),[dispatch]),handleClick=(0,react.useCallback)((function(){dispatch(login({username:username,password:password}))}),[dispatch,username,password]);return(0,jsx_runtime.jsxs)("div",{className:LoginForm_module_simpleLoginForm,children:[(0,jsx_runtime.jsx)(Text.x,{title:t("simpleLoginForm")}),error?(0,jsx_runtime.jsx)(Text.x,{text:error,colorType:"error"}):null,(0,jsx_runtime.jsx)(Input.Z,{disabled:disabled,onChange:handleChangeField("username"),autoFocus:!0,className:LoginForm_module_input,type:"text",value:username}),(0,jsx_runtime.jsx)(Input.Z,{disabled:disabled,onChange:handleChangeField("password"),className:LoginForm_module_input,type:"text",value:password}),(0,jsx_runtime.jsx)(Button.ZP,{disabled:disabled,onClick:handleClick,className:LoginForm_module_loginBtn,children:t("LogIn")})]})};LoginForm.displayName="LoginForm";var LoginForm_LoginForm=(0,react.memo)((0,lib.np)(LoginForm,reducers));try{LoginForm.displayName="LoginForm",LoginForm.__docgenInfo={description:"",displayName:"LoginForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/auth/modalByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"]={docgenInfo:LoginForm.__docgenInfo,name:"LoginForm",path:"src/features/auth/modalByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"})}catch(__react_docgen_typescript_loader_error){}}}]);
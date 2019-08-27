import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../Actions/";

const initialState = {
  counter: 0,
  counterTwo: 0
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;

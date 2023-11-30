/**
 * BottomSheetComponent.js
 *
 * A 3-step Bottom Sheet.
 * 1. The sheet is presented with a CTA prompting the user to interact
 * 2. The sheet is partially expanded with a text input focused
 * 3. The sheet is fully expanded with a text input focused</Text>
 *
 */

import React, { useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";

const BottomSheetComponent = ({}) => {
  // ref
  const bottomSheetRef = useRef(null);

  /**
   * Snap Point Demo instructions:
   *
   * 1. When a snap point is set higher than the CONTENT_HEIGHT, the sheet will expand to the maximum snap point *every time* the Text Input is focused
   *
   * 2. When the snap points do not include anything higher than the CONTENT_HEIGHT, the sheet will expand to the size of the content, but not allow the user to *manually* expand the sheet further
   */

  // 1.
  const initialSnapPoints = useMemo(() => [100, "CONTENT_HEIGHT", "90%"], []);

  // 2.
  //   const initialSnapPoints = useMemo(() => [100, "CONTENT_HEIGHT"], []);

  // dynamic height
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      android_keyboardInputMode="adjustResize"
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
    >
      <BottomSheetView style={styles.container} onLayout={handleContentLayout}>
        <BottomSheetTextInput
          style={styles.textInput}
          placeholder="Focus this input to partially expand the sheet."
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    padding: 24,
    backgroundColor: "grey",
    justifyContent: "space-between",
  },
  textInput: {
    width: "100%",
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
  },
});

export default BottomSheetComponent;

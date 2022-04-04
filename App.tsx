import React from "react";
import { useWindowDimensions, ScrollView } from "react-native";

import HTML, { MixedStyleRecord } from "react-native-render-html";

const tagStyles = {
  div: {
    fontSize: 16,
    lineHeight: 24,
    color: "black",
    marginTop: 40,
  },
  a: {
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "none" as const,
  },
} as unknown as MixedStyleRecord;

const App = () => {
  const { width } = useWindowDimensions();  

  const htmlTest =
    "<div>Some long text to reproduce this issue. Either long text or increase in `div` text size is required for the problem to be revealed. With `fontSize: 2`, the link will be clickable in voice over mode. <a href='https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg'>and link with description.</a></div>";

  const source = {
    html: htmlTest,
  };

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 16, backgroundColor: "white", flex: 1 }}>
      <HTML
        contentWidth={width}
        source={source}
        tagsStyles={tagStyles}
      />
    </ScrollView>
  );
};

export default App;

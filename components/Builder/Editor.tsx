import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Builder } from "./Builder";
import { EditMenu } from "./EditPanel/EditMenu";

import { Container } from "./widgets/Container/Container";
import { Text } from "./widgets/Typography/Typography";
import { Button } from "./widgets/Button/Button";
import { Video } from "./widgets/Video/Video";
import { Custom1, OnlyButtons } from "./widgets/Custom1/Custom1";
import { Custom2, Custom2VideoDrop } from "./widgets/Custom2/Custom2";
import { Custom3, Custom3BtnDrop } from "./widgets/Custom3/Custom3";

export const Editor = ({ store, user }): JSX.Element => {
  return (
    <CraftEditor
      resolver={{
        Container,
        Text,
        Custom1,
        Custom2,
        Custom2VideoDrop,
        Custom3,
        Custom3BtnDrop,
        OnlyButtons,
        Button,
        Video,
      }}
      enabled={false}
      onRender={EditMenu}
    >
      <Builder store={store} user={user}>
        <Frame>
          <Element
            canvas
            is={Container}
            width="800px"
            height="auto"
            background={{ r: 255, g: 255, b: 255, a: 1 }}
            padding={["40", "40", "40", "40"]}
            custom={{ displayName: "App" }}
          >
            <Element
              canvas
              is={Container}
              flexDirection="row"
              width="100%"
              height="auto"
              padding={["40", "40", "40", "40"]}
              margin={["0", "0", "40", "0"]}
              custom={{ displayName: "Introduction" }}
            >
              <Element
                canvas
                is={Container}
                width="40%"
                height="100%"
                padding={["0", "20", "0", "20"]}
                custom={{ displayName: "Heading" }}
              >
                <Text text="Craft.js is a React framework for building powerful &amp; feature-rich drag-n-drop page editors."></Text>
              </Element>
              <Element
                canvas
                is={Container}
                width="60%"
                height="100%"
                padding={["0", "20", "0", "20"]}
                custom={{ displayName: "Description" }}
              >
                <Text text="Everything you see here, including the editor, itself is made of React components. Craft.js comes only with the building blocks for a page editor; it provides a drag-n-drop system and handles the way user components should be rendered, updated and moved, among other things. <br /> <br /> You control the way your editor looks and behave."></Text>
              </Element>
            </Element>

            <Element
              canvas
              is={Container}
              background={{ r: 39, g: 41, b: 41, a: 1 }}
              flexDirection="column"
              width="100%"
              height="auto"
              padding={["40", "40", "40", "40"]}
              margin={["0", "0", "40", "0"]}
              custom={{ displayName: "ComplexSection" }}
            >
              <Element
                canvas
                background={{
                  r: 76,
                  g: 78,
                  b: 78,
                  a: 0,
                }}
                is={Container}
                flexDirection="row"
                margin={["0", "0", "0", "0"]}
                width="100%"
                height="auto"
                alignItems="center"
                custom={{ displayName: "Wrapper" }}
              >
                <Element
                  canvas
                  background={{
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                  }}
                  is={Container}
                  alignItems="center"
                  padding={["0", "0", "0", "0"]}
                  flexDirection="row"
                  width="350px"
                  height="250px"
                  custom={{ displayName: "Square" }}
                >
                  <Element
                    canvas
                    is={Container}
                    justifyContent="center"
                    alignItems="center"
                    background={{
                      r: 76,
                      g: 78,
                      b: 78,
                      a: 1,
                    }}
                    shadow={25}
                    width="90%"
                    height="90%"
                    padding={["10", "20", "10", "20"]}
                    custom={{ displayName: "Outer" }}
                  >
                    <Element
                      canvas
                      is={Container}
                      justifyContent="center"
                      alignItems="center"
                      background={{
                        r: 76,
                        g: 78,
                        b: 78,
                        a: 1,
                      }}
                      shadow={50}
                      width="80%"
                      height="80%"
                      padding={["10", "20", "10", "20"]}
                      custom={{ displayName: "Middle" }}
                    >
                      <Element
                        canvas
                        is={Container}
                        justifyContent="center"
                        alignItems="center"
                        background={{
                          r: 76,
                          g: 78,
                          b: 78,
                          a: 1,
                        }}
                        shadow={50}
                        width="60%"
                        height="60%"
                        padding={["10", "20", "10", "20"]}
                        custom={{ displayName: "Inner" }}
                      />
                    </Element>
                  </Element>
                </Element>
                <Element
                  canvas
                  background={{
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                  }}
                  is={Container}
                  padding={["0", "0", "0", "20"]}
                  flexDirection="column"
                  width="55%"
                  height="100%"
                  fillSpace="yes"
                  custom={{ displayName: "Content" }}
                >
                  <Text text="Design complex components"></Text>
                  <Text text="You can define areas within your React component which users can drop other components into. <br/><br />You can even design how the component should be edited — content editable, drag to resize, have inputs on toolbars — anything really."></Text>
                </Element>
              </Element>
            </Element>
            <Element
              canvas
              is={Container}
              background={{
                r: 234,
                g: 245,
                b: 245,
                a: 1,
              }}
              flexDirection="column"
              width="100%"
              height="auto"
              padding={["40", "40", "40", "40"]}
              margin={["0", "0", "40", "0"]}
              custom={{ displayName: "Programmatic" }}
            >
              <Element
                canvas
                background={{
                  r: 76,
                  g: 78,
                  b: 78,
                  a: 0,
                }}
                is={Container}
                flexDirection="column"
                margin={["0,", "0", "20", "0"]}
                width="100%"
                height="auto"
                custom={{ displayName: "Heading" }}
              >
                <Text text="Programmatic drag &amp; drop"></Text>
                <Text text="Govern what goes in and out of your components"></Text>
              </Element>
              <Element
                canvas
                background={{
                  r: 76,
                  g: 78,
                  b: 78,
                  a: 0,
                }}
                is={Container}
                flexDirection="row"
                margin={["30", "0", "0", "0"]}
                width="100%"
                height="auto"
                custom={{ displayName: "Content" }}
              >
                <Element
                  canvas
                  background={{
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                  }}
                  is={Container}
                  padding={["0", "20", "0", "0"]}
                  flexDirection="row"
                  width="45%"
                  custom={{ displayName: "Left" }}
                >
                  <Custom1
                    background={{
                      r: 119,
                      g: 219,
                      b: 165,
                      a: 1,
                    }}
                    height="auto"
                    width="100%"
                    padding={["20", "20", "20", "20"]}
                    margin={["0", "0", "0", "0"]}
                    shadow={40}
                  />
                </Element>
                <Element
                  canvas
                  background={{
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                  }}
                  is={Container}
                  padding={["0", "0", "0", "20"]}
                  flexDirection="column"
                  width="55%"
                  custom={{ displayName: "Right" }}
                >
                  <Custom2
                    background={{
                      r: 108,
                      g: 126,
                      b: 131,
                      a: 1,
                    }}
                    height="125px"
                    width="100%"
                    padding={["0", "0", "0", "20"]}
                    margin={["0", "0", "0", "0"]}
                    shadow={40}
                    flexDirection="row"
                    alignItems="center"
                  />
                  <Custom3
                    background={{
                      r: 134,
                      g: 187,
                      b: 201,
                      a: 1,
                    }}
                    height="auto"
                    width="100%"
                    padding={["20", "20", "20", "20"]}
                    margin={["20", "0", "0", "0"]}
                    shadow={40}
                    flexDirection="column"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Frame>
      </Builder>
    </CraftEditor>
  );
};

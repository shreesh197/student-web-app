import React, { useCallback, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { getLanguages, getSingleLanguage } from "../../services/assessment";
import {
  UndoOutlined,
  CaretRightOutlined,
  PicLeftOutlined,
} from "@ant-design/icons";
import { getCapitalizedString } from "../../helper";
import { codingCollection } from "../../constants";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";

const CodeEditor = () => {
  const themeIconProps = {
    className: "pe-2",
    color: "white",
    size: 20,
    style: {
      fill: "white",
    },
  };
  const [languages, setLanguages] = useState([]);
  const [selectedLanguageId, setSelectedLanguageId] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [srcCode, setSrcCode] = useState("Hello World!");
  const [compiledOutput, setCompiledOutput] = useState(
    "/***** Compiled output will appear here ****/"
  );
  const [compilationError, setCompilationError] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const [darkTheme, setDarkTheme] = useState(true);
  const [themeIcon, setThemeIcon] = useState<React.ReactNode>(
    <MdOutlineLightMode
      className={themeIconProps.className}
      color={themeIconProps.color}
      size={themeIconProps.size}
      style={themeIconProps.style}
    />
  );

  useEffect(() => {
    fetchCodingAssessment();
  }, []);

  const fetchCodingAssessment = () => {
    setApiResponse(codingCollection);
    setSrcCode(base64_decode(codingCollection.base_code));
    setSelectedLanguage(codingCollection.language.toLocaleLowerCase());
  };

  const fetchLanguages = useCallback(async () => {
    const response = await getLanguages();
    setLanguages(response);
  }, []);

  useEffect(() => {
    fetchLanguages();
  }, [fetchLanguages]);

  const fetchSingleLanguage = useCallback(async () => {
    const response = await getSingleLanguage(selectedLanguageId);
    // console.log(response);
    let refactoredLanguageName = response?.name
      ?.split("(")[0]
      .toLocaleLowerCase()
      ?.split(" ")[0];
    setSelectedLanguage(refactoredLanguageName);
    console.log(refactoredLanguageName);

    // const res = await getBoilerPlateCode(refactoredLanguageName);
    // console.log(res);
    // setSrcCode(res);
  }, [selectedLanguageId]);

  useEffect(() => {
    if (selectedLanguageId) {
      fetchSingleLanguage();
    }
  }, [fetchSingleLanguage, selectedLanguageId]);

  useEffect(() => {
    if (!darkTheme) {
      setThemeIcon(
        <MdNightlight
          className={themeIconProps.className}
          color={themeIconProps.color}
          size={themeIconProps.size}
          style={themeIconProps.style}
        />
      );
    } else {
      setThemeIcon(
        <MdOutlineLightMode
          className={themeIconProps.className}
          color={themeIconProps.color}
          size={themeIconProps.size}
          style={themeIconProps.style}
        />
      );
    }
  }, [
    darkTheme,
    themeIconProps.className,
    themeIconProps.color,
    themeIconProps.size,
    themeIconProps.style,
  ]);

  return (
    <>
      <div className="row" style={{ paddingTop: "65px" }}>
        <div className="col-3 question-main-area">
          <p className="font-weight-bold">{codingCollection.title}</p>
          <p>{codingCollection.question}</p>
          <p className="font-weight-bold">Examples:</p>
          {codingCollection.samples.map((el: any) => (
            <div className="example-card">
              <p>
                <span className="font-weight-bold">Input:</span> {el?.input}
              </p>
              <p className="mb-0">
                <span className="font-weight-bold">Output:</span> {el?.output}
              </p>
            </div>
          ))}
          {/* <p>{codingCollection.}</p> */}
        </div>
        <div className="col-6 editor-main-area p-0">
          <div className="d-flex flex-row bd-highlight justify-content-between align-items-center compiler-btn-row">
            <div className="pt-1 pb-0 pe-2 ps-2 bd-highlight">
              <select
                className="w-100 code-editor-dropdown"
                onChange={(e: any) => {
                  setSelectedLanguageId(e.target.value);
                }}
              >
                {languages.map((language: any) => (
                  <option key={language?.id} value={language?.id}>
                    {language?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-2 bd-highlight">
              <div className="d-flex flex-row bd-highlight">
                <div className="pe-2 bd-highlight">
                  <button
                    className="transparent-button reset-code-btn"
                    onClick={() => setDarkTheme(!darkTheme)}
                  >
                    {themeIcon}

                    <span>{darkTheme ? "Light" : "Dark"}</span>
                  </button>
                </div>
                <div className="ps-2 bd-highlight">
                  <button
                    className="transparent-button reset-code-btn"
                    onClick={() =>
                      setSrcCode(base64_decode(codingCollection.base_code))
                    }
                  >
                    <UndoOutlined
                      className="pe-2"
                      color="white"
                      size={16}
                      style={{ fill: "white" }}
                    />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Editor
            height="90vh"
            onChange={(value: any) => setSrcCode(value)}
            defaultLanguage={selectedLanguage || "javascript"}
            defaultValue={""}
            value={srcCode}
            theme={`vs-${darkTheme ? "dark" : "light"}`}
            options={{
              quickSuggestions: {
                other: false,
                comments: false,
                strings: false,
              },
              parameterHints: {
                enabled: false,
              },
              suggestOnTriggerCharacters: false,
              acceptSuggestionOnEnter: "off",
              tabCompletion: "off",
              wordBasedSuggestions: false,
            }}
          />
        </div>
        <div className="col-3 compiler-main-area p-0">
          <div className="d-flex flex-row bd-highlight compiler-btn-row">
            <div className="p-2 bd-highlight">
              <button
                className="transparent-button reset-code-btn"
                onClick={() => {}}
              >
                <CaretRightOutlined className="pe-2" color="white" size={16} />
                Run
              </button>
            </div>
            <div className="p-2 bd-highlight">
              <button
                className="transparent-button run-test-case"
                onClick={() => {}}
              >
                <PicLeftOutlined className="pe-2" size={24} color="white" />
                Run Test Case
              </button>
            </div>
            <div className="p-2 bd-highlight">
              <button
                className="transparent-button run-test-case"
                onClick={() => {}}
              >
                Submit
              </button>
            </div>
          </div>
          <textarea
            className="compiler-textarea"
            // type={"text"}
            value={compiledOutput}
            style={{
              color: compilationError ? "red" : "lightgreen",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CodeEditor;

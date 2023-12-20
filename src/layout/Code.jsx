import { Highlight, themes } from "prism-react-renderer";

export function CodeBlock({ lines, language }) {
  const code = lines.join("\r\n");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        maxHeight: "50vh",
        overflowY: "scroll",
      }}
    >
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <tr key={i} {...getLineProps({ line, key: i })}>
                <td
                  style={{
                    textAlign: "right",
                    paddingRight: "1em",
                    userSelect: "none",
                    opacity: "0.5",
                  }}
                >
                  {i + 1}
                </td>
                <td>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </td>
              </tr>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

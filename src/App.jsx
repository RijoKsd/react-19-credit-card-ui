import React, { useState } from "react";

 import Cards from "react-19-credit-card";
 import "react-19-credit-card/dist/es/index.css";

function App() {
  const [savedCards, setSavedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const supportedCards = [
    {
      number: "5555 4444 3333 1111",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "123",
    },
    {
      number: "4111 1111 1111 1111",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "123",
    },
    {
      number: "3700 000000 00002",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "1234",
    },
    {
      number: "3600 666633 3344",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "123",
    },
    {
      number: "6011 6011 6011 6611",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "123",
    },
    {
      number: "5066 9911 1111 1118",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "123",
    },
    {
      number: "6250 9460 0000 0016",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "123",
    },
    {
      number: "6062 8288 8866 6688",
      name: "JOHN SMITH",
      expiry: "10/20",
      cvc: "123",
    },
  ];

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const formatCVC = (value) => {
    return value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substring(0, 4);
  };

  const updateField = (field, value) => {
    setCurrentCard({ ...currentCard, [field]: value });
  };

  const handleSaveCard = () => {
    if (
      !currentCard.number ||
      !currentCard.name ||
      !currentCard.expiry ||
      !currentCard.cvc
    ) {
      alert("Please fill all card details before saving!");
      return;
    }
    setSavedCards([...savedCards, { ...currentCard, id: Date.now() }]);
    setCurrentCard({ number: "", name: "", expiry: "", cvc: "", focus: "" });
    setIsEditing(false);
  };

  const handleAddNewCard = () => {
    if (
      isEditing &&
      (currentCard.number ||
        currentCard.name ||
        currentCard.expiry ||
        currentCard.cvc)
    ) {
      alert("Please save the current card before adding a new one!");
      return;
    }
    setIsEditing(true);
    setCurrentCard({ number: "", name: "", expiry: "", cvc: "", focus: "" });
  };

  const handleDeleteCard = (id) => {
    setSavedCards(savedCards.filter((card) => card.id !== id));
  };

  const copyCode = () => {
    const code = `import React, { useState } from "react";
import Cards from "react-19-credit-card";
import "react-19-credit-card/dist/es/index.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />

      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
}

export default App;`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#333",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "bold",
              margin: "0 0 10px 0",
              color: "#1a1a1a",
            }}
          >
            💳 React 19 Credit Card
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 3vw, 20px)",
              color: "#666",
              margin: "0 0 25px 0",
            }}
          >
            Beautiful credit cards for your payment forms
          </p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/RijoKsd/react-19-credit-card"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#24292e",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <button
              onClick={copyCode}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#2563eb",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
              }}
            >
              {copied ? "✓" : "📋"} {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            gap: "30px",
            marginBottom: "40px",
            alignItems: "start",
          }}
        >
          {/* Card Display */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "40px 20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "30px",
                marginTop: "0",
                textAlign: "center",
                color: "#333",
              }}
            >
              Card Preview
            </h2>
            <Cards
              number={currentCard.number}
              name={currentCard.name}
              expiry={currentCard.expiry}
              cvc={currentCard.cvc}
              focused={currentCard.focus}
            />
          </div>

          {/* Form */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "clamp(20px, 5vw, 40px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 28px)",
                fontWeight: "bold",
                marginBottom: "10px",
                marginTop: "0",
                color: "#333",
              }}
            >
              Card Details
            </h2>
            <div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                     color: "#333",
                  }}
                >
                  Card Number
                </label>
                <input
                  type="tel"
                  name="number"
                  placeholder="1234 5678 9012 3456"
                  value={currentCard.number}
                  onChange={(e) =>
                    updateField("number", formatCardNumber(e.target.value))
                  }
                  onFocus={(e) => updateField("focus", e.target.name)}
                  onBlur={() => updateField("focus", "")}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    background: "#f9f9f9",
                    border: "1px solid #ddd",
                    color: "#333",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                  maxLength="19"
                />
                <small
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  Try: 4111, 5555, 3782, 6011
                </small>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                     color: "#333",
                  }}
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="JOHN DOE"
                  value={currentCard.name}
                  onChange={(e) =>
                    updateField("name", e.target.value.toUpperCase())
                  }
                  onFocus={(e) => updateField("focus", e.target.name)}
                  onBlur={() => updateField("focus", "")}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    background: "#f9f9f9",
                    border: "1px solid #ddd",
                    color: "#333",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                       color: "#333",
                    }}
                  >
                    Expiry Date
                  </label>
                  <input
                    type="tel"
                    name="expiry"
                    placeholder="MM/YY"
                    value={currentCard.expiry}
                    onChange={(e) =>
                      updateField("expiry", formatExpiry(e.target.value))
                    }
                    onFocus={(e) => updateField("focus", e.target.name)}
                    onBlur={() => updateField("focus", "")}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "8px",
                      background: "#f9f9f9",
                      border: "1px solid #ddd",
                      color: "#333",
                      fontSize: "16px",
                      boxSizing: "border-box",
                    }}
                    maxLength="5"
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                       color: "#333",
                    }}
                  >
                    CVC
                  </label>
                  <input
                    type="tel"
                    name="cvc"
                    placeholder="123"
                    value={currentCard.cvc}
                    onChange={(e) =>
                      updateField("cvc", formatCVC(e.target.value))
                    }
                    onFocus={(e) => updateField("focus", e.target.name)}
                    onBlur={() => updateField("focus", "")}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "8px",
                      background: "#f9f9f9",
                      border: "1px solid #ddd",
                      color: "#333",
                      fontSize: "16px",
                      boxSizing: "border-box",
                    }}
                    maxLength="4"
                  />
                </div>
              </div>

              <button
                onClick={handleSaveCard}
                style={{
                  width: "100%",
                  background: "#10b981",
                  color: "white",
                  padding: "16px",
                  borderRadius: "8px",
                  fontSize: "18px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                Save Card
              </button>

              <button
                onClick={handleAddNewCard}
                style={{
                  width: "100%",
                  background: "#2563eb",
                  color: "white",
                  padding: "16px",
                  borderRadius: "8px",
                  fontSize: "18px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                + Add New Card
              </button>
            </div>
          </div>
        </div>

        {/* Saved Cards */}
        {savedCards.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "clamp(20px, 5vw, 40px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "25px",
                marginTop: "0",
                color: "#333",
              }}
            >
              Your Saved Cards
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth > 600
                    ? "repeat(auto-fill, minmax(300px, 1fr))"
                    : "1fr",
                gap: "20px",
              }}
            >
              {savedCards.map((card) => (
                <div key={card.id} style={{ position: "relative" }}>
                  <Cards
                    number={card.number}
                    name={card.name}
                    expiry={card.expiry}
                    cvc={card.cvc}
                    focused=""
                  />
                  <button
                    onClick={() => handleDeleteCard(card.id)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "25px",
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Supported Cards */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "clamp(20px, 5vw, 40px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "25px",
              marginTop: "0",
              textAlign: "center",
              color: "#333",
            }}
          >
            Supported Cards
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth > 1200
                  ? "repeat(4, 1fr)"
                  : window.innerWidth > 768
                  ? "repeat(3, 1fr)"
                  : window.innerWidth > 500
                  ? "repeat(2, 1fr)"
                  : "1fr",
              gap: "20px",
            }}
          >
            {supportedCards.map((card, index) => (
              <div key={index}>
                <Cards
                  number={card.number}
                  name={card.name}
                  expiry={card.expiry}
                  cvc={card.cvc}
                  focused=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Installation */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "clamp(20px, 5vw, 30px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: "0",
              color: "#333",
            }}
          >
            📦 Installation
          </h3>
          <code
            style={{
              display: "block",
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "8px",
              color: "#10b981",
              fontFamily: "monospace",
              fontSize: "clamp(12px, 2.5vw, 14px)",
              overflow: "auto",
            }}
          >
            npm install react-19-credit-card
          </code>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            color: "#666",
            paddingTop: "40px",
            borderTop: "1px solid #e5e5e5",
            fontSize: "16px",
          }}
        >
          Made with ❤️ by{" "}
          <a
            href="https://www.instagram.com/rijo_ksd/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Rijo Sebastian
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

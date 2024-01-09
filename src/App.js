import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

function App() {
  // Definindo componentes
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  // Função para lidar com as mensagens
  const handleSendMessage = (e) => {
    // Evitando que a página seja recarregada
    e.preventDefault();

    // Evitando que mensagens vazias sejam enviadas
    if (newMessage === "") {
      setShowWarning(true);
      return;
    } else {
      setShowWarning(false);
    }

    // Armazenando mensagem no banco de dados
    setMessages([...messages, newMessage]);
    // Limpando o campo de mensagem
    setNewMessage("");
  };

  return (
    <>
      <Card className="m-3 p-3">
        {messages.map((message) => (
          <Card
            bg="primary"
            text="white"
            className="p-2 w-fit-content ms-auto chat-bubble rounded-4"
            key={message}
          >
            {message}
          </Card>
        ))}
      </Card>

      <Card className="m-3 p-3 ">
        {showWarning && (
          <Alert className="w-100">
            Digite sua mensagem e clique em enviar
          </Alert>
        )}
        <Form onSubmit={handleSendMessage}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputMessage">Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              id="inputMessage"
              type="text"
              style={{ height: "100px" }}
              value={newMessage}
              placeholder="Digite sua mensagem..."
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default App;

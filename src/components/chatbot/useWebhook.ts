// hooks/useWebhook.ts
import { useState, useCallback } from 'react';

interface WebhookResponse {
  output?: string;
}

interface UseWebhookReturn {
  sendMessage: (userMessage: string) => Promise<string | undefined>;
  loading: boolean;
  response: string;
  error: string | null;
  reset: () => void;
}

export const useWebhook = (): UseWebhookReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (userMessage: string): Promise<string | undefined> => {
    if (!userMessage?.trim()) {
      console.log('⚠️ Mensaje vacío, no se puede procesar');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const webhookUrl = "https://panel.dashtein.com/webhook/ee38ea24-46f0-40ca-bc15-67772c41ac45";
      
      if (!webhookUrl) {
        throw new Error('WEBHOOK_URL environment variable is not defined');
      }

      // Enviar al webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: userMessage  // Solo el texto, sin JSON
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed with status: ${response.status}`);
      }

      // Leer y parsear la respuesta JSON del webhook
      const responseData = await response.json() as WebhookResponse | WebhookResponse[];

      // Extraer el texto de respuesta
      let responseText = 'Lo siento, no pude procesar tu consulta.';

      if (Array.isArray(responseData) && responseData.length > 0) {
        responseText = responseData[0].output || responseText;
      } else if ((responseData as WebhookResponse).output) {
        responseText = (responseData as WebhookResponse).output!;
      }
      
      setResponse(responseText);
      setLoading(false);

      return responseText;

    } catch (err) {
      const errorMessage = 'Lo siento, ocurrió un error. Por favor intenta de nuevo.';
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMsg);
      setResponse(errorMessage);
      setLoading(false);
      return errorMessage;
    }
  }, []);

  const reset = useCallback((): void => {
    setLoading(false);
    setResponse('');
    setError(null);
  }, []);

  return {
    sendMessage,
    loading,
    response,
    error,
    reset,
  };
};
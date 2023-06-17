export const javaCode = (uuid: string) => `import java.io.*;
import java.net.*;
import java.util.Scanner;

public class Main {
  public static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    String x = "";

    while (scanner.hasNextLine()) {
      x += scanner.nextLine() + "\\\\n";
    }

    try {
      // URL for the POST request
      URL url = new URL("https://get-test-case.priyanshu-t.repl.co/api/testcases/${uuid}");

      // Open a connection
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();

      // Set the request method to POST
      connection.setRequestMethod("POST");

      // Enable output and input streams
      connection.setDoOutput(true);
      connection.setDoInput(true);

      // Set request headers
      connection.setRequestProperty("Content-Type", "application/json");
      connection.setRequestProperty("Accept", "application/json");

      // Create the request body
      String requestBody = "{\\"message\\":\\"" + x + "\\"}";

      // Send the request
      DataOutputStream outputStream = new DataOutputStream(connection.getOutputStream());
      outputStream.writeBytes(requestBody);
      outputStream.flush();
      outputStream.close();

      // Get the response code
      int responseCode = connection.getResponseCode();
      System.out.println("Response Code: " + responseCode);

      // Read the response
      BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
      String line;
      StringBuilder response = new StringBuilder();
      while ((line = reader.readLine()) != null) {
        response.append(line);
      }
      reader.close();

      // Print the response
      System.out.println("Response: " + response.toString());

      // Disconnect the connection
      connection.disconnect();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}`;

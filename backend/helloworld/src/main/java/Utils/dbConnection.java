package Utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

import com.mysql.cj.xdevapi.Statement;

public class dbConnection {
    public static void main(String[] args) {
        // Load environment variables
        String dbHost = System.getenv("DATABASE_HOST");
        String dbUsername = System.getenv("DATABASE_USERNAME");
        String dbPassword = System.getenv("DATABASE_PASSWORD");
        String dbName = System.getenv("DATABASE");

        // JDBC connection properties
        Properties props = new Properties();
        props.setProperty("user", dbUsername);
        props.setProperty("password", dbPassword);
        props.setProperty("useSSL", "true"); // Enable SSL

        try {
            // Connect to the database
            String url = "jdbc:mysql://" + dbHost + "/" + dbName;
            Connection connection = DriverManager.getConnection(url, props);

            // Execute query
            java.sql.Statement statement = connection.createStatement();
            String query = "SHOW TABLES";
            ResultSet resultSet = statement.executeQuery(query);

            // Display tables
            if (resultSet.next()) {
                System.out.println("Tables in the database:");
                do {
                    System.out.println("- " + resultSet.getString(1));
                } while (resultSet.next());
            } else {
                System.out.println("Connected successfully. No tables found in the database.");
            }

            // Close resources
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}


<?php
session_start();
if (isset($_POST['passkey'])) {
    $correctPasskey = '1234';  // Set your passkey here
    if ($_POST['passkey'] === $correctPasskey) {
        $_SESSION['authenticated'] = true;
        header('Location: protected.php');  // Redirect to protected page
        exit();
    } else {
        $error = "Incorrect passkey";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            text-align: center;
        }

        h2 {
            margin-bottom: 20px;
            font-size: 1.5rem;
            color: #333;
        }

        input[type="password"], input[type="text"] {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        input[type="password"]:focus, input[type="text"]:focus {
            border-color: #007bff;
            outline: none;
        }

        .toggle-password {
            float: right;
            margin-top: -30px;
            margin-right: 10px;
            cursor: pointer;
        }

        .login-container button {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .login-container button:hover {
            background-color: #0056b3;
        }

        .error-message {
            color: red;
            margin-top: 10px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .login-container {
                padding: 30px;
            }

            h2 {
                font-size: 1.3rem;
            }

            input[type="password"], input[type="text"] {
                font-size: 0.9rem;
            }

            .login-container button {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form method="post">
            <input type="password" id="passkey" name="passkey" placeholder="Enter passkey" required>
            <span class="toggle-password" onclick="togglePassword()">👁️</span>
            <button type="submit">Login</button>
        </form>
        <?php if (isset($error)) { ?>
            <p class="error-message"><?php echo $error; ?></p>
        <?php } ?>
    </div>

    <script>
        function togglePassword() {
            const passwordField = document.getElementById('passkey');
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
        }
    </script>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
<script src="js/getterPage.js"></script>
</html>

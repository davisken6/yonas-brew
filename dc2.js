First name: <input id="first_name">
Last name: <input id="last_name">
    <button id="enter">Enter</button>

    <div id="result"></div>

    <script>
        function enter() {
            var fname = document.getElementById('first_name').value;
            var lname = document.getElementById('last_name').value;

            var html = 'Hello <b>' + fname + '</b>' + lname;

            document.getElementbyId('result').innerHTML = html;
        }

        document.getElementById('enter').addEventListener('click', enter);
    </script>
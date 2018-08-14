/*
    Please don't judge my code, this is full of hacks as all I wanted waas
    to get it working. Also, I hate front-end development.

    For those of you who are here only to read the command list, 
    scroll down to the handleShellCommand function.

    If you have an idea of something else I could add, email me at:
    rodrigorato [at] tecnico.ulisboa.pt
    And I'll make sure I credit you! ;)
 */

// Initializes and starts the shell
function init() {
    doShellOutput("<b>Welcome to...</b> ");
    doShellOutput("    ____        __       _____ __  __");
    doShellOutput("   / __ \\____ _/ /_____ / ___// / / /");
    doShellOutput("  / /_/ / __ \\`/ __/ __ \\__ \\/ /_/ / ");
    doShellOutput(" / _, _/ /_/ / /_/ /_/ /__/ / __  /  ");
    doShellOutput("/_/ |_|\\__,_/\\__/\\____/____/_/ /_/   ");
    doShellOutput("                <i>version 1.33.7 alpha</i>");
    doShellOutput(" ");
    doShellOutput("<b>First time</b>? If so, type <b>help</b>!");
    doShellOutput(" ");
    
        
    doShellPrompt();

    // Add an event listener, so we can get the keypresses for the commands
    window.addEventListener("keypress", handleKeyPress);
}

// Handles the shell commands
function handleShellCommand(command) {
    var split_command = command.split(" ");
    command = command.split(" ")[0];

    if(command == "") {
        // Do nothing  
    } else if (command == "ls") {
        if(split_command.includes("-a") || split_command.includes("-l") || split_command.includes("-la") || split_command.includes("-al")) {
            doShellOutput(".");
            doShellOutput("..");
            doShellOutput(".ratoshrc");
        }
    } else if (command == "whoami") {
        doShellOutput("nobody");   
    } else if (command == "help") {
        doShellOutput("Hello and welcome to my <del>website</del> <b>shell</b>!");
        doShellOutput(" ");
        doShellOutput("I'm <b>Rodrigo Rato</b>, a <b>Computer Science and Engineering</b> student, interested in:");
        doShellOutput("    -> <b>Software</b> and <b>Network Security</b>;");
        doShellOutput("    -> <b>Cyber forensics</b>;");
        doShellOutput("    -> <b>System Administration</b>;");
        doShellOutput("    -> Virtualization and <b>Cloud Technologies</b>;");
        doShellOutput("... and much more. I like all kinds of challenges.");
        doShellOutput(" ");
        doShellOutput("You can reach me at:");
        doShellOutput("    -> <b>rodrigorato [at] tecnico.ulisboa.pt</b>");
        doShellOutput("    -> <b>https://www.linkedin.com/in/rodrigorato/</b>");
        doShellOutput(" ");
        doShellOutput("Would you like to learn more about me?");
        doShellOutput("If so, type `<i><b>man rato</b></i>`.");
        doShellOutput(" ");
        
        
    } else if (command == "man") {
        doShellOutput("RATO(1)                       Rodrigo Rato                             RATO(1)");
        doShellOutput("NAME ");
        doShellOutput("         rato - database of Rodrigo Rato information");
        doShellOutput(" ");
        doShellOutput("DESCRIPTION ");
        doShellOutput("         Holds loads of data about Rodrigo, to find information easily.");
        doShellOutput(" ");
        doShellOutput("         -c, --contacts");
        doShellOutput("               Outputs the list of public contacts for Rodrigo.");
        doShellOutput(" ");
        doShellOutput("         -i, --interests");
        doShellOutput("               Outputs the list of Rodrigo's professional interests.");
        doShellOutput(" ");
        doShellOutput("         -l, --likes");
        doShellOutput("               Outputs a list of things Rodrigo likes.");
        doShellOutput(" ");
        doShellOutput("         -t, --timeline");
        doShellOutput("               Outputs a timeline of Rodrigo's professional status.");
        doShellOutput(" ");

    } else if (command == "clear") {
          location.reload();
    } else if (command == "w" || command == "uptime" || command == "top") {
        var date = new Date().toISOString().split("T")[1].split(".")[0];
        var mins = date.split(":")[0] + ":" + date.split(":")[1];
        var dateobj = new Date();

        doShellOutput(date + " up 8 days,  " + mins + ",  2 users,  load average: 0.39, 0.49, 0.49");
        doShellOutput("USER     TTY        LOGIN@   IDLE   JCPU    PCPU    WHAT");
        doShellOutput("rato     pts/0      08Aug18  4days  1:09m   1:09m   htop ");
        doShellOutput("nobody   www        01Jan70  ∞      13:37m  13:37m  ratosh ");
        
          
    } else if (command == "cd") {
        doShellOutput("No such file or directory.");
    } else if (command == "rm") {
        doShellOutput("Permission denied.");
    } else if (command == "mv") {
        doShellOutput("Permission denied.");
    } else if (command == "chown") {
        doShellOutput("Permission denied.");
    } else if (command == "chmod") {
        doShellOutput("Permission denied.");
    } else if (command == "su") {
        doShellOutput("<b>ACCESS GRANTED!</b>");
        doShellOutput(" ");
        doShellOutput("Just kidding, you're literally 'nobody'.");
    } else if (command == "sudo") {
        doShellOutput("'nobody' is not in the sudoers file.  This incident will be reported.");
    } else if (command == "echo") {
        split_command.shift();
        doShellOutput(split_command.join(""));
    } else if (command == "uname") {
        if(split_command.includes("-a")) {
            doShellOutput("UNIX(tm) System V claptrap DEC VAX-11/780");
        } else {
            doShellOutput("UNIX(tm) System V");
        }
          
    } else if (command == "stty") {
        doShellOutput("You wish.");          
    } else if (command == "touch") {
        doShellOutput("Trying to touch me? Ew. Gross.");
    } else if (command == "mkdir") {
        doShellOutput("Permission denied.");
    } else if (command == "rmdir") {
        doShellOutput("Permission denied.");
    } else if (command == "pwd") {
        doShellOutput("/tmp/tmp.g8MjUvb9at");
    } else if (command == "cp") {
        doShellOutput("Permission denied.");
    } else if (command == "find") {
        doShellOutput("Permission denied.");
    } else if (command == "grep") {
        doShellOutput("Permission denied.");
    } else if (command == "vim" || command == "vi") {
        doShellOutput("Do you like escape rooms? Me too! ^_^");
    } else if (command == "rato") {
        if(split_command.includes("-c") || split_command.includes("--contacts")) {
            doShellOutput("You can reach me at:");
            doShellOutput("    -> <b>rodrigorato [at] tecnico.ulisboa.pt</b>");
            doShellOutput("    -> <b>https://www.linkedin.com/in/rodrigorato/</b>");
            doShellOutput("    -> <b>https://twitter.com/genericpointer</b>");
            doShellOutput("    -> <b>https://github.com/rodrigorato/</b>");
            
        } else if(split_command.includes("-i") || split_command.includes("--interests")) {
            doShellOutput("I'm interested in:")
            doShellOutput("    -> <b>Software</b> and <b>Network Security</b>;");
            doShellOutput("    -> <b>Cyber forensics</b>;");
            doShellOutput("    -> <b>System Administration</b>;");
            doShellOutput("    -> Virtualization and <b>Cloud Technologies</b>;");
            doShellOutput("... and much more. I like all kinds of challenges.");
        } else if(split_command.includes("-l") || split_command.includes("--likes")) {
            doShellOutput("Some other things I like include:");
            doShellOutput("    -> <b>Photography - Digital and Film</b>;");
            doShellOutput("    -> <b>Music - I play the Bass guitar</b>;");
            doShellOutput("    -> <b>FPS games - Mainly Counter-Strike</b>;");
            doShellOutput("    -> <b>Historical computing - I Revived a Sun SPARCServer 1000</b>;");
            doShellOutput("    -> <b>*NIX - Big fan of FOSS SW and *NIX in general</b>;");

            
        } else if(split_command.includes("-t") || split_command.includes("--timeline")) {
            doShellOutput("My professional timeline (as of 14/08/2018):");
            doShellOutput(" [2017 ~ present] - <b>System Administrator</b>@RNL/DEI: Windows System Administration;");
            doShellOutput(" ");
            doShellOutput(" [2017 ~ present] - <b>MEIC-A</b>@IST: MSc. in Cyber Security;");
            doShellOutput(" [2014 ~ 2017] - <b>LEIC-A</b>@IST: BSc. in Computer Science and Engineering;");
        
        } else {
            doShellOutput("Invalid argument.");
            doShellOutput("To find valid usage/arguments, use `<i><b>man rato</b></i>`.");
        }

    } else {
        doShellOutput("ratosh: command not found: " + command);
    }
    
    doShellPrompt();
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// Write to output, aka changing the divs around in the dom
// This is a huge hack lmao, but what isn't with front-end development? 
// Either way, I don't want any of this in my life, so it "just works".
function doShellOutput(str, newline = true) {
    var commandsElement = document.getElementById("shell-commands");
    var lastElement = document.getElementById("last-command");

    // Replace spaces in str with space html special char
    str = str.replaceAll(" ", "&nbsp;");

    // Append the string and the cursor at the end!
    lastElement.innerHTML = lastElement.innerText + str + "<span class=\"cursor\"/>";

    if(newline){
        // Remove the last-command id from the previous Element
        lastElement.id = "";

        // Remove the cursor span from the previous Element
        lastElement.innerHTML = lastElement.innerHTML.split("<span class=\"cursor\"></span>").join("");

        // Add a new Element with the last-command id and cursor span
        commandsElement.innerHTML += "<div class=\"shell-command\" id=\"last-command\"><span class=\"cursor\"></span></div>";
    }

    // Make sure our div is scrolled to the bottom, emulating a real terminal
    var shellDiv = document.getElementById("shell");
    shellDiv.scrollTop = shellDiv.scrollHeight;
}

function doShellPrompt() {
    doShellOutput("╭─nobody@<b>rodrigorato</b> ~");
    doShellOutput("╰─$ ", false);
}

// Handles the keypresses, when an ENTER is received, calls command handler
var currentString = "";
function handleKeyPress(evnt) {
    console.log("key: " + evnt.keyCode);
    var keyCode = (evnt.keyCode ? evnt.keyCode : evnt.which);

    // If ENTER is pressed, just handle the current command and zero it out
    if(keyCode == 13) {
        doShellOutput("");
        handleShellCommand(currentString);
        currentString = "";
    } else if(keyCode == 8) { 
        doShellOutput("^[");
    } else {
        // Else, just add the new char to the command in currentString
        currentString += String.fromCharCode(keyCode);
    }

    if(keyCode == 32) {
        doShellOutput("&nbsp;", false);
    } else {
        doShellOutput(String.fromCharCode(keyCode), false);
    }
}

init();
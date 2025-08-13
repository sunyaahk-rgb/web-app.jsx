import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
    // State to manage the currently active lesson
    const [activeLesson, setActiveLesson] = useState('intro');
    // State for the code editor content
    const [codeEditorContent, setCodeEditorContent] = useState('console.log("Hello, World!");');
    // State for the code execution output
    const [codeOutput, setCodeOutput] = useState('');

    // Function to handle code execution
    const runCode = () => {
        try {
            // Capture console.log output
            let output = '';
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                output += args.map(String).join(' ') + '\n';
            };

            // Execute the code. WARNING: Using eval() can be dangerous with untrusted input.
            // For a real application, consider a secure sandboxed environment (e.g., Web Workers, server-side execution).
            // Using (0, eval) to avoid direct eval warning with bundlers, but it does not change the security implications.
            (0, eval)(codeEditorContent);

            console.log = originalConsoleLog; // Restore original console.log
            setCodeOutput(output || 'Code executed successfully (no console output).');
        } catch (error) {
            setCodeOutput(`Error: ${error.message}`);
        }
    };

    // Lesson content data structure
    const lessons = {
        intro: {
            title: 'Lesson 1: Introduction to Programming',
            content: (
                <>
                    <p className="mb-4 text-gray-700">
                        Welcome to the world of programming! Programming is essentially giving instructions to a computer to perform tasks. Think of it like writing a recipe, but for a machine.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">What is a Program?</h3>
                    <p className="mb-4 text-gray-700">
                        A program is a set of instructions written in a specific language that a computer can understand and execute. These instructions are typically executed in sequence, but can also involve decisions and repetitions.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Why Learn to Code?</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><strong>Problem Solving:</strong> Coding teaches you to break down complex problems into smaller, manageable steps.</li>
                        <li><strong>Automation:</strong> Automate repetitive tasks, saving time and effort.</li>
                        <li><strong>Creativity:</strong> Build anything from websites and apps to games and robots.</li>
                        <li><strong>Career Opportunities:</strong> High demand for skilled programmers across various industries.</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Our First Program: "Hello, World!"</h3>
                    <p className="mb-4 text-gray-700">
                        It's a tradition in programming to start with a "Hello, World!" program. This simple program just prints the text "Hello, World!" to the console.
                    </p>
                    <p className="mb-4 text-gray-700">
                        In JavaScript (the language we'll be using for these examples), you can do this using <code>console.log()</code>.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                        <code>
                            console.log("Hello, World!");
                        </code>
                    </div>
                    <p className="mb-4 text-gray-700">
                        The <code>console.log()</code> function is used to display output in the browser's developer console. The text inside the parentheses and quotes is what gets printed.
                    </p>
                    <p className="mb-4 text-gray-700">
                        Now, try running the "Hello, World!" code in the interactive editor below!
                    </p>
                </>
            ),
        },
        variables: {
            title: 'Lesson 2: Variables and Data Types',
            content: (
                <>
                    <p className="mb-4 text-gray-700">
                        In programming, variables are like containers that hold information. You can store different types of information in them, such as numbers, text, or true/false values.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Declaring Variables</h3>
                    <p className="mb-4 text-gray-700">
                        In JavaScript, you can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>. We'll focus on <code>let</code> and <code>const</code> as they are more commonly used in modern JavaScript.
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><code>let</code>: Used for variables whose values can be reassigned.</li>
                        <li><code>const</code>: Used for variables whose values are constant and cannot be reassigned after initial assignment.</li>
                    </ul>
                    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                        <code>
                            let age = 30; <span className="text-gray-500">// Declares a variable 'age' and assigns it the value 30</span><br/>
                            const PI = 3.14159; <span className="text-gray-500">// Declares a constant 'PI' with a fixed value</span><br/>
                            let name = "Alice"; <span className="text-gray-500">// Declares a variable 'name' and assigns it text</span>
                        </code>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Data Types</h3>
                    <p className="mb-4 text-gray-700">
                        The type of data a variable holds is called its data type. Common data types in JavaScript include:
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><strong>Number:</strong> For numerical values (integers and decimals). <code className="bg-gray-100 p-1 rounded">let quantity = 10;</code></li>
                        <li><strong>String:</strong> For text. Strings are enclosed in single or double quotes. <code className="bg-gray-100 p-1 rounded">let greeting = "Hello";</code></li>
                        <li><strong>Boolean:</strong> For true/false values. <code className="bg-gray-100 p-1 rounded">let isActive = true;</code></li>
                        <li><strong>Null:</strong> Represents the intentional absence of any object value. <code className="bg-gray-100 p-1 rounded">let emptyValue = null;</code></li>
                        <li><strong>Undefined:</strong> Indicates that a variable has been declared but has not yet been assigned a value. <code className="bg-gray-100 p-1 rounded">let unassigned;</code></li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Using Variables</h3>
                    <p className="mb-4 text-gray-700">
                        You can use variables in your code and even combine them.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                        <code>
                            let firstName = "John";<br/>
                            let lastName = "Doe";<br/>
                            let fullName = firstName + " " + lastName; <span className="text-gray-500">// Concatenating strings</span><br/>
                            console.log(fullName); <span className="text-gray-500">// Output: "John Doe"</span><br/><br/>
                            let num1 = 5;<br/>
                            let num2 = 3;<br/>
                            let sum = num1 + num2;<br/>
                            console.log(sum); <span className="text-gray-500">// Output: 8</span>
                        </code>
                    </div>
                    <p className="mb-4 text-gray-700">
                        Try declaring your own variables and printing them to the console in the interactive editor!
                    </p>
                </>
            ),
        },
        // Add more lessons here as needed
        // functions: { ... },
        // conditionals: { ... },
        // loops: { ... },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-900 p-6 sm:p-8 flex flex-col items-center">
            {/* Tailwind CSS CDN */}
            <script src="https://cdn.tailwindcss.com"></script>
            {/* Google Fonts - Inter */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

            {/* Main Container */}
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-1/4 bg-blue-700 p-6 text-white flex flex-col">
                    <h2 className="text-3xl font-bold mb-6 text-center">Code Tutor</h2>
                    <nav className="flex-grow">
                        <ul className="space-y-3">
                            {Object.keys(lessons).map((key) => (
                                <li key={key}>
                                    <button
                                        onClick={() => setActiveLesson(key)}
                                        className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ease-in-out
                                            ${activeLesson === key ? 'bg-blue-800 font-semibold shadow-md' : 'hover:bg-blue-600 hover:translate-x-1'}`}
                                    >
                                        {lessons[key].title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-8 text-center text-sm text-blue-200">
                        <p>&copy; 2025 Code Tutor. All rights reserved.</p>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-grow p-8 lg:p-10">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-200 pb-3">
                        {lessons[activeLesson].title}
                    </h1>

                    {/* Lesson Content */}
                    <div className="prose prose-lg max-w-none mb-8 text-gray-700">
                        {lessons[activeLesson].content}
                    </div>

                    {/* Interactive Code Editor */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Code Editor</h2>
                        <textarea
                            className="w-full h-48 p-4 mb-4 font-mono text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                            value={codeEditorContent}
                            onChange={(e) => setCodeEditorContent(e.target.value)}
                            placeholder="Write your JavaScript code here..."
                        ></textarea>
                        <button
                            onClick={runCode}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                        >
                            Run Code
                        </button>
                        <div className="mt-6 p-4 bg-gray-800 text-white font-mono text-sm rounded-lg shadow-md overflow-auto max-h-40">
                            <h3 className="text-lg font-semibold mb-2 text-gray-300">Output:</h3>
                            <pre className="whitespace-pre-wrap">{codeOutput}</pre>
                        </div>
                        <p className="mt-4 text-sm text-red-600">
                            <strong>Warning:</strong> This simple editor uses `eval()` for demonstration. In a real-world scenario, executing arbitrary user code with `eval()` is a security risk. For production, use a secure sandboxed environment.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
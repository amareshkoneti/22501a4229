let token = null;
//function to fetch token from the server
async function fetchToken() {
  const res = await fetch("http://20.244.56.144/evaluation-service/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "amareshkoneti@gmail.com",
      name: "koneti amaresh",
      rollNo: "22501a4229",
      accessCode: "eHwNzt",  
      clientID: "373a9649-0efb-4072-aeb7-cccbffe876bb",
      clientSecret: "VVkUqEWvAxdebGcGt"
    })
  });

  const data = await res.json();
  token = data.access_token;
}

// Main Log funtion
export async function Log(stack, level, pkg, message) {
  const validStacks = ["frontend"];
  const validLevels = ["debug", "info", "warn", "error", "fatal"];
  const validPackages = [
    "api", "component", "hook", "page", "state", "style",
    "auth", "config", "middleware", "utils"
  ];

  if (!validStacks.includes(stack) || !validLevels.includes(level) || !validPackages.includes(pkg)) {
    console.error("Invalid input for stack/level/package");
    return;
  }

  if (!token) {
    await fetchToken();
  }

  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ stack, level, package: pkg, message }),
    });

    const data = await res.json();
    console.log("Log sent:", data);
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}

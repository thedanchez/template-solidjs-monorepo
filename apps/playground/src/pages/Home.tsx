import { Button, Card } from "@scope/hello-a";
import { Badge, Input } from "@scope/hello-b";
import { createSignal } from "solid-js";

export const Home = () => {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [submitted, setSubmitted] = createSignal(false);

  const handleSubmit = () => {
    if (name() && email()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubmitted(false);
  };

  return (
    <div class="p-8 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Playground App - Interactive Demo</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="User Registration Form">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <Input placeholder="Enter your name" value={name()} onInput={setName} />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email()}
                onInput={setEmail}
              />
            </div>
            <div class="flex gap-2">
              <Button onClick={handleSubmit}>Submit</Button>
              <Button variant="secondary" onClick={resetForm}>
                Reset
              </Button>
            </div>
            {submitted() && (
              <div class="mt-4">
                <Badge color="green">✅ Form submitted successfully!</Badge>
              </div>
            )}
          </div>
        </Card>

        <Card title="Status Dashboard">
          <div class="space-y-4">
            <div>
              <h4 class="font-medium text-gray-900 mb-2">Form Status</h4>
              <div class="flex flex-wrap gap-2">
                <Badge color={name() ? "green" : "red"}>Name: {name() ? "✓" : "✗"}</Badge>
                <Badge color={email() ? "green" : "red"}>Email: {email() ? "✓" : "✗"}</Badge>
              </div>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 mb-2">Package Status</h4>
              <div class="space-y-1">
                <Badge color="blue">@scope/hello-a: Button, Card</Badge>
                <Badge color="yellow">@scope/hello-b: Input, Badge</Badge>
              </div>
            </div>

            {name() && email() && (
              <div class="mt-4 p-3 bg-gray-50 rounded-md">
                <p class="text-sm text-gray-700">
                  <strong>Preview:</strong>
                  <br />
                  Name: {name()}
                  <br />
                  Email: {email()}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

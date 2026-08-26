# Da Vinci 4744 - Team Website

## Setting up a development environment
1. Install [Bun](https://bun.com/) (1.2.x) if you don't have it already
2. Run ```bun install --frozen-lockfile``` to install the necessary packages  

Now you're good to go :)

## Running
```bun run dev```

## Updating TBA event names

Create a read API key from [The Blue Alliance account page](https://www.thebluealliance.com/account), then run:

```sh
TBA_AUTH_KEY=your_key bun run events:update
```

The script scans the robot MDX files for event keys and updates `data/tba-events.json`. To check whether the generated names are current without writing the file, use:

```sh
TBA_AUTH_KEY=your_key bun run events:check
```

Keep the API key in your environment and do not commit it to the repository.

The `Update TBA event names` GitHub Action runs after every push. It contacts TBA only when a robot references an event that is missing from the generated cache, then commits the fetched name. Add the read API key as a repository Actions secret named `TBA_AUTH_KEY` for the workflow to use.

## Robot links

Robot MDX metadata can include links to source code, build threads, or other resources. The links panel is hidden when this field is omitted.

```mdx
links: [
  { label: "Robot code", url: "https://github.com/example/repository", type: "code" },
  { label: "Build thread", url: "https://www.chiefdelphi.com/t/example", type: "build-thread" },
  { label: "CAD", url: "https://example.com/cad", type: "other" }
]
```

The `type` field is optional and accepts `code`, `build-thread`, or `other`.

import { Blog, BlogTag } from "@/types/blog";

// TODO: move this to somewhere it's easier to edit
export const blogs: Blog[] = [{
    title: 'I Became a React Query Merchant',
    subheader: "I'm begging you to stop using useEffect to manage all your network requests.",
    tags: [BlogTag.CODING],
    slug: 'react-query-merchant',
    createdOn: '2025-12-04',
    content: `

As a software consultant, I've seen my fair share of React codebases. And unfortunately, a lot of them have not been pretty.

If you've worked on a React project, you probably are familiar with \`useEffect\`. It lets you run a function once your component mounts, or whenever any of it's dependencies change.

This seems like it'd be a great use for anytime we need to make network calls! We can make the network request when we need it, and then store that with \`useState\`!

\`\`\`tsx
// UserList.tsx

const UserList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    ...
  )
\`\`\`

Ah! But we have to show something while it's loading, so we'll need a loading state. And what if it fails? We need an error state too!

\`\`\`tsx
// UserList.tsx

const UserList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setData(data);
      }).catch(err => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    ...
  )
}
\`\`\`

Great, that works! Now we'll just need to repeat this for every single API call we make. And then we can finally get to adding the real stuff our component needs.

## The useEffect + useState Nightmare
You could see how handling all of this manually can get to be pretty cumbersome. But this is just the tip of the iceberg.

**What if we have another request that needs to get made?** We'll need a second \`useEffect\`, another set of states.

**What if we navigate away and then back?** We have to show the loading state again and wait for the request again.

**What if we have a network request that only should fire under certain conditions?** We'd need to add an early return to our \`useEffect\`

**What if we need that data in some child components?** We can pass it via props, sure, but **what if they need to update that data**? We'll also need to pass the setter function.

This can quickly spiral out of control as your pages become a jumbled mess of intertwined logic held together with just hopes and dreams.

## Enter (TanStack) React Query

Let's look at how we would handle a similar example with React Query.

\`\`\`tsx
// useGetUsers.ts

export const useGetUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  });

  return { data, isLoading, error };
}
\`\`\`

\`\`\`tsx
// UserList.tsx

const UserList = () => {
  const { data, isLoading, error } = useGetUser();

  return (
    ...
  )
}
\`\`\`


That's it. That's the whole thing. Loading state? Handled. Error state? Handled. Caching? Automatic. Stale data? Automatically refetches.

You'll also notice that the useQuery hook can (and should) live in it's own separate file, that way we can have a clear separation of concerns. Our page just gets told what state it's in, and can render appropriately. If we need that data elsewhere, we just import that hook and use it. If the cache doesn't have it we refetch, but if it does, we just use that.

And this is really only the start of the benefits React Query gives you. If this isn't enough to get you started with it, please [read more about it](https://tanstack.com/query/latest).

So please I'm begging you to stop using \`useEffect\` for network requests. Managing request data in \`useState\` yourself is too much for anything that's more than a simple app. React Query won't just save you time, it'll save your sanity. You'll thank yourself in the future.
`
  },
  {
    title: 'Pretty Decent Chili Oil',
    subheader: "A recipe for at least one person's favorite chili oil.",
    tags: [BlogTag.COOKING],
    slug: 'chili-oil',
    createdOn: '2025-12-04',
    content: `
#### | NOTE: Pictures to come when I make my next batch

My brother gifted me a tiny jar of chili oil for my birthday after I first moved out, and I've been really into chili oil/crisp ever since. His investment paid off, because now my chili oil is his wife's favorite!

So without further ado, some pretty decent chili oil. Heavily inspired by [this recipe from SeriousEats](https://www.seriouseats.com/homemade-spicy-chili-crisp).


## Ingredients

### Chilis:
- ~ 150g dried chiles (I'm using 100g California chiles, 50g gochugaru), deseeded and then ground
- ~ 30g ground Sichuan peppercorn

### Oil:
- 500g canola (or any neutral) oil


### Crisps:
- 3 shallots, thinly sliced
- 2 heads of garlic, broken into cloves and thinly sliced
- 2 bunches of green onions, thinly sliced

### Add-ons:
(these are recommended amounts, and can be added/excluded as desired)
- 3 pieces whole star anise
- 2 bay leaves
- 1 cinnamon stick
- 30g ginger cut into match sticks
- 30g salt
- 4g msg
- 15g soy sauce
- 15g black vinegar
- 20g sugar
- 5g curry powder
- 2g ground black pepper


## Directions:

### 1. Fry the crispies
Heat your oil to 350&deg;F. Fry your shallots. Once their nicely golden brown, using a mesh strainer. Set them aside until the end. Repeat with the garlic, then with the green onions. This'll give you an aromatic and flavorful oil.

### 2. Prepare your chilis
This can be done while your frying your crispies. De-seed your chilis. You can try the method outlined in the [SeriousEats recipe](https://www.seriouseats.com/homemade-spicy-chili-crisp#section--instructions_1-0) or just try whatever you want, but this is definitely the longest part. 

Once you have your chilis de-seeded, grind your chilis by either blending them or using a spice grinder.

### 3. Mix ingredients
Now that all the ingredients are prepared, mix your ground chilis and any add-on ingredients in a heat-safe bowl. Note that your fried crispies are not going in here. Importantly, don't use a glass bowl. It will probably break. Trust me.

### 4. Make the chili oil!
Re-heat the oil you used for frying your crispies to 375&deg;F. Pour into your heat-safe bowl with all your chilis. There will be bubbles, and it will be satisfying. Let sit for ~30 minutes, or until the bowl doesn't burn you when you touch it.

### 5. Store
Once cooled, remove the star anise, bay leaves, and cinnamon stick (if you used them), and add in all your crispies. Stir to your heart's content. Pour into jars and store refrigerated, for approximately up to 3 months. Note that the flavor tends to get better as it sits.

## Afterword

Let me know if you try this and if it is your favorite chili oil! I'd love to bring that number up :D

Also, this makes for a pretty good gift with the holidays coming up.

And for fun here's a recipe using this chili oil:
#### Pretty decent hotpot dipping sauce
- 2 parts chili oil
- 1 part soy sauce
- 1 part black vinegar
`
  },
  {
    title: 'M24:TBD - My Intro to Game Dev with Godot',
    subheader: "The start of my game developer journey with my partner.",
    tags: [BlogTag.CODING, BlogTag.GAMING],
    slug: 'm24-tbd-1',
    createdOn: '2025-12-05',
    content: `
Games are what really got me interested in coding, but I don't have extensive experience in game dev at all. While I've experimented with different engines, like Unity or Unreal, I've always found it to be generally pretty difficult to get past an initial prototype. So I recently started working with my partner to start our own little game dev "club" where we meet weekly to check progress and make sure we're doing something relevant to it every week. They're handling the more art/design side of things, while I'm handling the code.

## The Idea
We wanted to keep our game extremely simple, so we're going for a 2D puzzle platformer. The inspiration is a game from my partner's childhood called Math 24, where you're given 4 numbers and you have to reach 24 by adding, subtracting, multiplying, or dividing the numbers, using each number exactly once.

## The Tech
As I'm handling the tech, I wanted something approachable (Unreal is a bit intense for our needs) and new to keep my interest. So I settled on Godot, and it's been pretty nice to learn, very reminiscent of Python which is cool. There's also a lot of built in base classes which has made getting started easy.

## Progress Report
Honestly we don't have much to show, but I have added a dash and some on collision handling to the base character class.

## Coming Up
Next up, I'm working on replacing the placeholder assets with some pixel art assets that my partner is working on. For the game logic, we're still hashing out how we want to apply different operators to numbers, but I'll be working on a pick-up feature where the player can pick up a number by colliding with it, and have that number float around behind them.
`,
  }
]
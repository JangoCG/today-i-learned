import Card from '../card/card';
import styles from './feed.module.scss';
import { useRouter } from 'next/router';

export interface FeedProps {
  createTweet: (data: unknown) => void;
}

export interface FeedForm {
  tweet: string;
}

const mockMarkdown = `
To embed the contents of an SVG file into your site using NextJS 12 with the new Rust-based compiler, perform the following steps:

1. Install \`@svg/webpack\`:



2. Create a \`svgr.config.js\` config file with the following contents. This will remove the width and height from the SVG but keep the viewBox for correct scaling.

\`\`\`js
module.exports = {
  dimensions: false,
};
\`\`\`

4. Add to your webpack config in \`next.config.js\`
\`\`\`js
module.exports = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\\.svg$/;
    config.module.rules.push({
      test: /\\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
};
\`\`\`


4. Import SVG into component
\`\`\`js
import Logo from 'public/images/logo.svg';
\`\`\`

5. Use the Component
\`\`\`js
<Logo className="h-8 w-auto sm:h-10" alt="Site Title" />
\`\`\``;
const mockMarkDown1 = `

# Ruby memoization with nil values

As Ruby developers, we're often looking for ways to reduce time consuming lookups in our code. A lot of times, that leads us to memoizing those lookups with the common \`||=\` operator.

However, if our lookups return a nil or falsey value, our memo will actually keep executing the lookup:

~~~ruby
def ticket
  @ticket ||= Ticket.find_by(owner:)
end
~~~

This code essentially boils down to:
~~~ruby
def ticket
  @ticket = @ticket || Ticket.find_by(owner:)
end
~~~

If our \`find_by\` in the example above returns nil, the code will continue to run the \`find_by\` every time we call the \`ticket\` method.

To avoid this, we can shift our pattern a bit, and look to see if we have already set our instance variable or not:

~~~ruby
def ticket
  return @ticket if defined?(@ticket)
  @ticket = Ticket.find_by(owner:)
end
~~~
`;

const mockMarkDown2 = `
# What is  <Component {…props} />
~~~js
// These two are equivalent
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
~~~
`;

const mockMarkDown3 = `
~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
~~~`;

export function Feed({ createTweet }: FeedProps) {
  const router = useRouter();

  const navigateToCreateNewTilPage = () => {
    router.push('/create');
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <h1 className={styles.ctaText}>
            Share your new knowledge. <br />
            Someone out there will need it.
          </h1>
          <button
            className={styles.createTilBtn}
            onClick={navigateToCreateNewTilPage}
          >
            Create a new TIL
          </button>
        </div>
        <Card title={'this is the title'} markdown={mockMarkDown3} />
        <Card
          title={'some tutorial xoxo mockMarkdown'}
          markdown={mockMarkdown}
        />
        <Card title={'Another card'} markdown={mockMarkDown2} />
      </div>
    </>
  );
}

export default Feed;

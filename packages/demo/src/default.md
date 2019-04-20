# MDX Live Editor

* Based on [EasyMDE](https://github.com/Ionaru/easy-markdown-editor) and [MDX Runtime](https://mdxjs.com/advanced/runtime/)

## Example Component

Displays any content next to each other. Works best with 🐈

<Column.Group centered as={Section}>
<Column size="4">
  <Button as={Block} fullwidth color="info"> launch process </Button>
  <Button as={Block} fullwidth color="warning"> 
     reticulating splines ... <span className="fa fa-image" />
  </Button> 
  <Button as={Block} fullwidth color="success"> success </Button> 
</Column>
</Column.Group>

## Just some demo content

Lorem markdownum accepere habeto Hellespontus mater sidus **ab pollice**! Non
ante natalis metuendus, litore arma ambiguo adspicit matres gravis mollem
trabibus procorum, manu. Erat arguitur. Patrios in habitat moenibus labra
membraque heros mille somnus perempto genitor promittit ramis, suspiratibus
gratia Arctos. Me nec.

here's a box!

<Level as={Box}>
  <Level.Item textAlign="centered">
    <div>
      <Heading>Tweets</Heading>
      <Title as="p">3,210</Title>
    </div>
  </Level.Item>
  <Level.Item textAlign="centered">
    <div>
      <Heading>Following</Heading>
      <Title as="p">210</Title>
    </div>
  </Level.Item>
  <Level.Item textAlign="centered">
    <div>
      <Heading>Followers</Heading>
      <Title as="p">321</Title>
    </div>
  </Level.Item>
  <Level.Item textAlign="centered">
    <div>
      <Heading>Likes</Heading>
      <Title as="p">321K</Title>
    </div>
  </Level.Item>
</Level>
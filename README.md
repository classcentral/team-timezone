# Team Timezone

[![Version](https://img.shields.io/npm/v/@classcentral/team-timezone.svg)](https://www.npmjs.org/package/@classcentral/team-timezone)

The Class Central Team Timezone package allows you to install a simple timezone management tool for distributed teams. It can be installed and used however you wish (e.g. private and for internal use or publicly).

## Installation

Install the package with:

    npm install @classcentral/team-timezone --save

## Usage

### Basic example
The `teamTimezone` method requires two parameters. An `id` of the DOM element that the widget will be attached to, and a `people` object with relevant timezone data for your team. The `people` param can be either a json file or a plain javascript object . See below for proper formatting.

```javascript
import teamTimezone from "@classcentral/team-timezone";
import people from "./people.json";

teamTimezone("timezone", people);
```

### Basic example w/ customize styles
If you want to override some or all style declarations without worrying about CSS, you can pass a `style` object as the third parameter. You can use this empty [style object ](src/example.style.js) as a starting point. For reference, you can view the default styles that arre applied [here](src/teamzone.style.js). These default styles will remain unless overridden specificially in your `style` object.

```javascript
import teamTimezone from "@classcentral/team-timezone";
import people from "./people.json";

// customize/override specific styles
const styles = {
  container: `
    width: 750px;
  `,
  title: `
    font-size: 18px;
  `,
}

teamTimezone("timezone", people, styles);
```

### Basic example w/ no styles applied
If you want to use your own external stylesheet you can turn off the default styles. See the [markup generated](docs/generated.html) for HTML class references necessary for CSS selection.

```javascript
import teamTimezone from "@classcentral/team-timezone";
import people from "./people.json";

teamTimezone("timezone", people, false);
```

## Data formatting
Below is an example `people.json`. The only properties currently supported for each person object are `name`, `timezone`, and `avatar`.

```json
[
  {
    "name": "Human Bean",
    "timezone": "America/New_York",
    "avatar": "https://pbs.twimg.com/profile_images/425872431975133184/OLU3zsLe_400x400.jpeg",
  }
]
```

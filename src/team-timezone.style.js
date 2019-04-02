const style = (props) => {
  const css = {
    container: `
      width: 950px;
      margin: 0px auto;
      font-family: Helvetica, Arial, sans-serif;
    `,
    header: `
      position: relative;
      height: 50px;
      margin: 25px 0px;
    `,
    title: `
      font-size: 16px;
      color: #121212;
      padding: 25px;
      margin: 0;
      position: absolute;
      top: 10px;
      left: 0px;
    `,

    currentContainer: `
      text-align: center;
    `,
    currentTime: `
      margin: 0px 0px 3px 0px;
      padding: 0px;
    `,
    currentTimezoneContainer: `
      margin: 0px;
      padding: 0px;
    `,
    currentTimezoneAbbr: `
      color: #8B8B8B;
      font-size: 14px;
    `,
    currentTimezoneLabel: `
      display: inline-block;
      font-style: italic;
      padding: 3px 5px;
      border-radius: 5px;
      margin-right: 5px;
    `,
    currentTimezoneCustom: `
      background-color: #ffc229;
      color: white;
      font-style: normal;
    `,
    iconClock: `
      vertical-align: bottom;
    `,
    enterTime: `
      vertical-align: middle;
    `,

    form: `
      width: 300px;
      margin: 0 auto;
      display: flex;
      align-items: center;
    `,
    formFieldset: `
      border: none;
      position: relative;
      padding: 0px;
      margin: 0px;
    `,
    formInput: `
      width: 100%;
      height: 40px;
      font-size: 16px;
      padding: 0px 10px;
      box-sizing: border-box;
    `,
    formTimezoneAbbr: `
      color: #8B8B8B;
      font-size: 14px;
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 10px;
    `,
    buttonApply: `
      margin-left: 5px;
      display: inline-block;
    `,
    buttonCancel: ``,
    buttonClear: ``,

    people: `
      display: flex;
      padding: 0;
      margin: 0;
    `,
    timezoneItem: `
      width: 16.667%;
      list-style: none;
      border-right: 1px solid #F0F0F0;
      padding: 0 25px;
      box-sizing: border-box;
    `,
    timezoneItemLastChild: `
      border: none;
    `,
    timezoneItemFirstChild: ``,
    timezoneDate: `
      color: #8B8B8B;
      font-size: 14px;
      padding: 0;
      margin: 0 0 3px 0;
      display: block;
    `,
    timezoneTime: `
      color: #121212;
      font-size: 21px;
      padding: 0;
      margin: 0 0 3px 0;
      display: block;
    `,
    timezoneOffset: `
      color: #8B8B8B;
      font-size: 16px;
    `,
    personAvatar: `
      text-align: center;
    `,
    personAvatarImage: `
      width: 100%;
      display: inline-block;
      margin: 10px 0px;
      border-radius: 50%;
    `,
    personName: `
      display: block;
      text-align: center;
      color: #8B8B8B;
      font-size: 12px;
    `
  };
  return {
    ...css,
    ...props
  };
}

export default style;

const style = (props) => {
  const css = {
    container: `
      width: 100%;
      padding: 25px;
      box-sizing: border-box;
      font-family: Helvetica, Arial, sans-serif;
      min-width: 900px;
    `,
    header: `
      position: relative;
      height: 50px;
      margin: 25px 0px;
    `,
    title: `
      font-size: 16px;
      font-weight: bold;
      line-height: 100%;
      color: #121212;
      padding: 25px;
      margin: 0;
      position: absolute;
      top: 10px;
      left: 0px;
      vertical-align: middle;
    `,

    currentContainer: `
      text-align: center;
    `,
    currentTime: `
      margin: 0px 0px 3px 0px;
      padding: 0px;
      font-size: 24px;
      font-weight: bold;
      line-height: 100%;
    `,
    currentTimezoneContainer: `
      margin: 0px;
      padding: 0px;
    `,
    currentTimezoneAbbr: `
      color: #8B8B8B;
      font-size: 12px;
      line-height: 100%;
    `,
    currentTimezoneLabel: `
      display: inline-block;
      padding: 3px 5px;
      border-radius: 5px;
      line-height: 100%;
      font-size: 12px;
    `,
    currentTimezoneCustom: `
      background-color: #ffc229;
      color: white;
      margin-right: 5px;
      font-size: 12px;
      font-weight: bold;
    `,
    iconClock: `
      vertical-align: middle;
    `,
    enterTime: `
      vertical-align: middle;
      background: #f0f0f0;
      border: 1px solid #e0e0e0;
      padding: 5px;
      font-weight: bold;
      border-radius: 5px;
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
      border: 1px solid #ccc;
      border-radius: 3px;
    `,
    formTimezoneAbbr: `
      color: #8B8B8B;
      font-size: 12px;
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 13px;
    `,
    buttonApply: `
      margin-left: 12px;
      background: #f0f0f0;
      border: 1px solid #e0e0e0;
      padding: 5px;
      font-weight: bold;
      border-radius: 5px;
      display: inline-block;
    `,
    buttonCancel: `
      border: none;
      background: none;
    `,
    buttonClear: `
      background: #ccc;
      border: none;
    `,

    people: `
      display: flex;
      border-top: 1px solid #F0F0F0;
      padding: 25px 0 0 0;
      margin: 0;

    `,
    timezoneItem: `
      width: 16.667%;
      list-style: none;
      border-right: 1px solid #F0F0F0;
      padding: 0 25px;
      box-sizing: border-box;
    `,
    timezoneItemLast: `
      border: none;
    `,
    timezoneItemFirst: ``,
    timezoneDate: `
      color: #8B8B8B;
      font-size: 14px;
      padding: 0;
      margin: 0 0 3px 0;
      display: block;
      line-height: 100%;
    `,
    timezoneTime: `
      color: #121212;
      font-size: 18px;
      font-weight: bold;
      line-height: 100%;
      padding: 0;
      margin: 0 0 3px 0;
      display: block;
    `,
    timezoneOffset: `
      color: #8B8B8B;
      font-size: 14px;
      line-height: 100%;
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

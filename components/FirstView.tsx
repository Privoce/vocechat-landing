import React from "react";
import Image from "next/future/image";
type Props = {};

function FirstView({}: Props) {
  return (
    <section className="flex min-h-screen flex-col items-center bg-primary-50 pt-24 pb-10 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      <h2 className="font-semibold md:text-6xl sm:text-4xl text-primary-900 tracking-tight text-center">
        Your Social Media Privately Hosted
      </h2>
      <p className="text-xl w-[768px] sm:w-[90%] text-center text-primary-700 mt-6 mb-16 mx-4">
        As a top alternative to centralized chat services, Voce chat is a superlight Rust powered
        open-core chat app that prioritizes private hosting.
      </p>
      <Image
        width={800}
        height={496}
        placeholder="blur"
        className="sm:w-[90%] md:w-[800px] lg:w-[1200px]"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAfCAYAAAClDZ5ZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMqADAAQAAAABAAAAHwAAAAC/oCkdAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNTQyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45NTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KkpPW2AAAC1tJREFUWAnFWMtvVNcZ/+77ztzxzHjssbExgvBokxLRgkJbaCqlqy4aiRWoq67CJqq66o4NUtV1/4OqbJAoUoNUqVKlLqoumkAj0eDSkCbBpShGQLAZ2zNzX3Nvf7/vzDW2ZciCRY595557zznf+R6/73GuJWhlWVq8fx3Nsiw5e/asffXq1RH2P3Hs2Hd+eerU95r9fl/ev35dhrhHUSRFUYht23Lv3j05c+aMtNvtknMuX778Htb99uvg/Xl7Tl24cKH3+PHj8tGjR9BtWV65cqXE5G3X+fPnyziOy/X19XJpaam8dOkSx3+qljh68ff+WZL/lv6zp+3o0aNVV27fFtnyuPn+ZTu3b992zp07NwSdt2/cuPHHkydPxmtra169HpVJEsuTJ0/EdV0YzlKrTExMlI1Gw0rTVBzHSTc2NmonTpz4nfv+jY9+0Ypqv8pG8mUap25ejEqxbOVvtZdu8rl3QWRltbQs26IGQNTAERvoM/Bp4Ln1WfvV8Pb5hDPXzs4dtK5/+O/i5of/qK8NBvKv5ThcqJWyvLwsfuBDCA8waonv+3QBGY1GQiFc1wEXlgchZX5+Xtxmu7MQTM00p8qN5ko8lKYTwJgF5ljSaES4WXgsQERAzFViFIR4VaPzgSJwgjY8bD5bZp4RcTy+/Ubsh2TYSqD9L8s9YWZleSphCD5AyHIs6fXWdBH3LIqRBEFIa6gwaZopj27g19Iit8SrOWlvte922jUwXirDrmPrAi4mnw4IkSg1A/PqnX2zAZ2RHKsUtJhuEIBJ6OK5jfPYer2nVp5nVrMRop8ojFzX1n1HAAkblUr6FJ5a5L7j/S3Mja2m5wErtn10/z5bUqN9mozL8zzHNZJa4MrDdZE/f+5LIwABC8JhnKHGtUfSz0UG+ViYsTxEaCkDzMUkvfBT9Sk0/gsoohbV5O+Pffn5fl+WlxbFC9sytWdB4uFQXM+VLqLW7q2EommlQtzhMJaNjVhm9nbk0+y+7BtMS5kVUo/qcBVYhOYE1BIIs28qlHemPBWAhMkTdVM1epbRnXlDIY3GOXPctnT5RqEFuH/jviWDJJPIGcpqXkqnXFALFKNCBuCRmtcLFqTluY5+QyvhKtwgqKtUdu7IxKOO+B0MuiJZZrCH8KHCuI6rEeTB8heA1QSIeGotzzPEkiSBI+aGOEREiJRWuy3T3S7YpXg7JKAUaOMQIYOnTyRqNKV7+AfSSBOxwThRoYxiPffjc9UoFAZliH1GaTrjqmSBJzG0ceufD+TN0wtYZIGpQqWu1WpKjAvDMJRmqwXBNGKIDeGgHqXtBwGi2gCRJlRLhlBAiLVs4z21v/OnErFWN/B5+BjhFnAh04MBo7KIB3h5nlESiamvQAgnz63k6aqE3W6I+bbYeBnUQjnxxjcREVIIkCuhOpihAPQTziGT0zPzVIS+54aMcAyJdLwutE9/Mg7+zAK68U4JdjwzCjmATKs1JcUoE/COaBaADyrNKEOtAOuQHmOEAys5UG4Wx4VNyVuTk2AebpkY5+NEMkd4sHEO8gdggFhQOpIBe4ntAYKuQolWC3RTV8Mm13NTs7GS+MqfQX9DNoaZvPObj+UvH3whSTyQp+MIqXSgFyrQ0IaVIGAJ4W0IUgz6thsj5y33Mpn2Smlb1Dz9I9fwWoU3+guWSh3K8WtbXFqZNdbZxil2rOxBZXA9HZPCMkpVY1xTCUtrU2G//tlB8e0Bgk1D/LBQC4/g2ORlcz5pgFHXcUpkRElHxSM39EUmGyJpgpBq04EADT9QOFF6F6GZTHiAUQx5+r2RTEyCKLhxNXHSTYz5dacdP/QrXlUjRLc2QoqNsERpIp0Jo7TVp2uSIdnRyT1cdUCf/FSNCkih8ARKaka1WJ2d1UY2SuQ/n/9VjkanxLEcoRa4rtlsygBmcyBxg4Tvr0gatbVM8CEc6GnbqjFqSzfFGEO3DUhyY77jGEMqG9eMkGwbyBMcJy0viGSEzB7VXclhQb5nChggpzBRkykGosBDZgekB4krjVFiazyjfzjYbHbhoNBEgeXJSBkwEPGQnREQJWh6EhzfIxpqyQmIFvAlNhUcdzJXA0zIFBVBRtR8DMEUBE+ly3d8ZD54Zk2i5+FnNyWa7Eqt2YWyEp2Tgr+pzqSuqX5It0AQagJBq4ISBztrlFnvr8nq3U9kpjMnQ/gKnZ1OnGFyiX6EMIIAbPANoR1gE2WQNFrNivYL79x4KzSqyZUl+Uz/KZkA+0OJ2vQJWhZRFZBnKKZOaNGa1mGIWuQBvGUsIpUAYOQgJ0zuOSIlGLfgI9QOMehAGywa2ahNthg+8QTjISJLHK9S12oJ5qSKWfbxQIdUq9DRa8D5zrZVQNrrwOtvIMmlgGMJX/VB1+xKOLHPkFztQVpUuBaQsK121lbW5ePFJekXDKmEBCIUFtH/h7hCJMJOx7DB+iakpoKWJDwXDPpqNZY0ZIyXahqCaA5Sh6ZWBxqFIpQ/lZNvFYzrlh+uILQirwEBcWKOEVWZRAHIFy1BSHOPSiiFFrXXbNVl/6vzsm+hC/OZQoybMLyNoCn6SdVClCLumJDPsMfrK5paCHM2hdxlPhmbm4ZyEInILEt5Ms73TIzsM3iwU8BQPKvQj0gbohnYcINP/vuZ7N2/IKGLUr4kRgVhryYJCCSIZKCAC/UNirg+tOsxNLNyHjdTiZrDT6XxHAITIrvBqlpX3S3w8Ldrf5DugVdk75FXZYg9VONgmocrWqZqTAlshBb5UIuQPTLx+pEj2BSHFvgAJdfJMKeNyRFKmbEcm+YkegmtEcoSzidBc5bBUQBjzB+0KOFFjHMPKqyCA6Zsb2D0uz/+icTQcr2OagH5QyGKWdR6mmdKl4tIg8rinkOW+7QI4zxD6tKnd2Rufj+wj/gO5skA66kc4ylyTdv4nWZoFnK0Dgk+q4fI/rNWWeXZG8PArs+gjZQiix/ckLkDSAMQgpFKYQWGJyfbW5epQmht+lETecjlROaACHg8deCwSqllBBikFnDeQuRCvIZAZJwtg2YIL2qXGqf2qHEsQYNDUm/459maz1QKyw/OL2E5+iA6oM+DkWPqM8ykVZ0I83BQC8OaIoNEc0TP9fUNdGFREkYLqUgEowHqvqiITfjlgIPx/mBNIiSYGgpCdSq85+ZkogqjtADhw6hBhlhH9VCrUWgqRedjE5P6SJkMooLGfIZxwtWHk1Igzq1ghi7Wi3z7+29KBnQk+H7Amo97RzhB7mZd0ttMiMoANBmD8KrvSBNOniMqEVb49KLarA5ZlmXyQOVoFX5pCcMUBTHM7raxEav6NRmd66rG/upKTwVibccjAUfjGJEJY1Qmrcg/8tcEf4xuCQpThRYnASLlbBeJAvRdVC5khJAgcSazrYyZg47m0oqHl77TMkRmd6r1XFoKeYwa4fmFxvgo1pbKDQngzCvzr50UfIvRiZzMi1qvCNAPqA3Op6Z4Z3um0/FDNaCjL/4hPBh5qLQUWmb76H/LyCfT0sVJFXUGfCRTC7Bkqnjq99f1yG2OGOAf0CoHMJ2dxWVy62bxoN2RACdD5g+a0TisqYIdfAJidq7eEZYVxtmn5XhVGtsu7u4CEYo2fGacxVUnRX9o+R2E7BInQEAsgZBkmN+Aq2jKYIOvkfoRp9fr2S429fjBq8hieAiiC8Kejw8K1BKZ4wcFMkun46ms1ZzYnaOXfHvo4EG5du09+dFbb8nx1w4pNe7PMwr3J7TBMJivq7JmZ2c5J1hcXJQ7d+7csu7evbvfsrxX7LqfycyMNbG+LnlMZ+cxl2UCEhqXVD8QqGpVzwBi/HbbQzXzxXfsZc/NzQ1Pn/7h6ePHj717+PChCKhWy+OjtsKbFCgYz0e86BcQzLp48eKfMPTu/wF3AaggNxz98QAAAABJRU5ErkJggg=="
        quality={100}
        unoptimized={true}
        src={"/img/demo.png"}
        alt="demo picture"
      />
      <div className="flex gap-12 mt-16">
        <a
          title="download Android APP from google play"
          className="flex flex-col items-center gap-4"
          href="https://play.google.com/store/apps/details?id=com.privoce.vocechatclient"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={24}
            height={24}
            alt="Google Play  Icon"
            src={`/img/icon.google.play.svg`}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-24 md:h-24 hover:scale-110 transition-transform"
          ></Image>
          <span className="text-primary-700 text-md">Google Play</span>
        </a>
        <a
          title="download iOS APP from app store"
          className="flex flex-col items-center gap-4"
          href="https://apps.apple.com/app/vocechat/id1631779678"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={24}
            height={24}
            alt="App Store  Icon"
            src={`/img/icon.app.store.svg`}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-24 md:h-24 hover:scale-110 transition-transform"
          ></Image>
          <span className="text-primary-700 text-md">APP Store</span>
        </a>
      </div>
    </section>
  );
}

export default FirstView;

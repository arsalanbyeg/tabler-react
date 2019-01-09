//@flow

import * as React from "react";
import Card from "../Card/Card.react";
import Icon from "../Icon/Icon.react";
import moment from "moment";

type Props = {|
  +children?: React.Node,
  +title?: string,
  +titleUrl?: string,
  +avatarUrl?: string,
  +description?: string,
  +date?: string,
  +imgUrl?: string,
  +iconName?: string,
  +iconHref?: string,
  +authorName?: string,
  +avatarImgSrc?: string,
  +imgSrc?: string,
  +imgAlt?: string,
  +aside?: boolean,
  +postHref?: string,
  +profileHref?: string,
  +iconPrefix?: string,
|};

function BlogCard({
  children,
  title,
  description,
  avatarUrl,
  imgUrl,
  imgAlt,
  aside,
  authorName,
  date,
  imgSrc = "",
  avatarImgSrc = "",
  iconName,
  iconHref,
  postHref,
  profileHref,
  iconPrefix = "",
}: Props): React.Node {
  return !aside ? (
    <Card>
      <span onClick={postHref}>
        <img className="card-img-top" src={imgSrc} alt={imgAlt} />
      </span>
      <Card.Body className="d-flex flex-column">
        <h4>
          <span className="pointer" onClick={postHref}>{title}</span>
        </h4>
        <div className="text-muted">{description}</div>
        <div className="d-flex align-items-center pt-5 mt-auto">
          { avatarImgSrc ? 
          <div
            className="avatar avatar-md mr-3"
            style={{ backgroundImage: `url(${avatarImgSrc}` }}
          /> : null}
          <div>
            <span onClick={profileHref} className="text-default pointer">
              {authorName}
            </span>
            <small className="d-block text-muted">{moment(date, "X").fromNow()}</small>
          </div>
          <div className="ml-auto text-muted">
            <span onClick={iconHref} className="icon d-none d-md-inline-block ml-3 pointer">
              <Icon prefix={iconPrefix || "fe"} name={iconName || "heart"} />
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  ) : (
    <Card className="card-aside">
      <span
        onClick={postHref}
        className="card-aside-column pointer"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        {""}
      </span>
      <Card.Body className="d-flex flex-column">
        <h4>
          <span className="pointer" onClick={postHref}>{title}</span>
        </h4>
        <div className="text-muted">{description}</div>
        <div className="d-flex align-items-center pt-5 mt-auto">
          { avatarImgSrc ? 
          <div
            className="avatar avatar-md mr-3"
            style={{ backgroundImage: `url(${avatarImgSrc}` }}
          /> : null}
          <div>
            <span onClick={profileHref} className="text-default pointer">
              {authorName}
            </span>
            <small className="d-block text-muted">{moment(date, "X").fromNow()}</small>
          </div>
          <div className="ml-auto text-red">
            <span onClick={iconHref} className="icon d-none d-md-inline-block ml-3 pointer">
                <Icon prefix={iconPrefix || "fe"} name={iconName || "heart"} />
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

/** @component */
export default BlogCard;

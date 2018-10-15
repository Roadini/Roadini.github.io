/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}`;
    const showcase = siteConfig.users.map(user => (
        <div>
            <h5>
                <div>
                    {user.caption}
                </div>
                <div>
                    {user.teamRole}
                </div>

            </h5>
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
        </div>
    ));

    const showcaseNormal = siteConfig.otherUsers.map(user => (
        <div>
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
        </div>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Team Members</h1>
              <p>
                   The idiots trying to make this work.
             </p>
            </div>
            <div className="logos">{showcase}</div>
              <h1>Users</h1>
              <p>
             </p>
            <div className="logos">{showcaseNormal}</div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;

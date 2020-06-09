import React, {useState, ChangeEvent} from 'react';
import './pure-form.css';
import './pure-buttons.css';

interface props {
  org: string,
  repo: string,
  setOrgAndRepo: (org:string, repo: string) => void,
  setJumpToPage: (page: number) => void
}

type InputEvent = ChangeEvent<HTMLInputElement>;
type ChangeHandler = (e: InputEvent) => void;

export const RepoSearchForm = ({org, repo, setOrgAndRepo, setJumpToPage}: props) => {
  const [currentOrg, setCurrentOrg] = useState<string>(org);
  const [currentRepo, setCurrentRepo] = useState<string>(repo);
  const [currentPageText, setCurrentPageText] = useState<string>('1');

  const onOrgChange: ChangeHandler = e => {
    setCurrentOrg(e.target.value);
  }

  const onRepoChange: ChangeHandler = e => {
    setCurrentRepo(e.target.value);
  }

  const onLoadRepoClick = () => {
    setOrgAndRepo(currentOrg, currentRepo);
  }

  const onCurrentPageChanged: ChangeHandler = e => {
    setCurrentPageText(e.target.value);
  }

  const onJumpToPageClicked = () => {
    setJumpToPage(parseInt(currentPageText));
  }

  return (
    <form className="pure-form">
      <div>
        <label htmlFor="org" style={{marginRight: 5}}>Org:</label>
        <input name="org" value={currentOrg} onChange={onOrgChange} />
        <label htmlFor="repo" style={{marginRight:5, marginLeft: 10}}>Repo:</label>
        <input name="repo" value={currentRepo} onChange={onRepoChange} />
        <button type="button" className="pure-button pure-button-primary" style={{marginLeft:5}} onClick={onLoadRepoClick}>Load Repo</button>
      </div>
      <div style={{marginTop:5}}>
        <label htmlFor="jumpToPage" style={{marginTop: 5}}>Issues page</label>
        <input name="jumpToPage" value={currentPageText} onChange={onCurrentPageChanged}></input>
        <button type="button" className="pure-button pure-button-primary" style={{marginLeft:5}} onClick={onJumpToPageClicked}>Jump To Page</button>
      </div>
    </form>
  );

}


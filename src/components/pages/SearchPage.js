import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from "../inc/Config";
import { bloodGroup } from '../inc/Functions'
import Icofont from 'react-icofont';
import SearchResult from '../inc/SearchResult';

export class SearchPage extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            loading: false,
            error: '',
            group: '',
            search:'',
            all_group:[],
            search_result: [],
            Searching: false,
            status:'',
        }
        this._isMounted = false;
        // this.getAll_donnor = _.debounce(this.getAll_donnor, 500); 
    }

    componentWillUnmount() {
        this._isMounted = false;
        
    }
    async componentDidMount() {
        this._isMounted = true; 
        this._isMounted && this.get_all_blood_group()
   }
    
    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    get_all_blood_group = () => {
        if (this._isMounted) {
            var a = bloodGroup();
            a.then((result) => {
                this.setState({
                    all_group: result,
                })
            
            })
        }
        
    }

    submitHandler = (e) => {
        e.preventDefault();
        const data = {
            search: this.state.search,
            group: this.state.group,  
        }
        this.setState({ Loading: true }, () => {
            axios.post(`${API_URL}/search`,JSON.stringify(data))
                .then(response => {
                    this._isMounted && this.setState({
                    search_result: response.data.data,
                    Loading: false,
                    Searching: true,
                    status: response.data.st,
                });
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    Loading: false,
                    error:error
                });
                return null;
            })
            
        });
    }

   

    render() {
        return (
            <div>
                {/* <SearchForm/> */}
                <div className=" ">
                    <div className="searchArea searchPage">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 offset-sm-2">
                                    <form action="" onSubmit={this.submitHandler}>
                                        <div className="searchBannerArea">
                                            <div className="searchContent">
                                                <div className="slider_content searchPage">
                                                    <div className="search_input">
                                                        <input type="text" name="search" className="form-control" onChange={this.changeHandler} placeholder="search with Name or place" />
                                                    </div>
                                                    <div className="group_list">
                                                        <select name="group" className="form-control" onChange={this.changeHandler}>
                                                            <option value="">Blood Group</option>
                                                            {this.state.all_group.map((group, i) => (
                                                                <option value={group.id} key={i}>{group.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="searchHomeBtn">
                                                        <button type="submit" className="btn btn-primary"> <Icofont icon="search-user" /> <span>Search</span></button>
                                                    </div>
                                                    
                                                </div>
                                                <div className="searchDetails">
                                                    <h6> Total Donar: &nbsp;
                                                    {this.props.status === 1 || this.state.status === 1 ?
                                                        (this.state.Searching
                                                        ?
                                                        this.state.search_result.length
                                                        :
                                                        this.props.result.length)
                                                        :
                                                         0
                                                        }
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        {this.state.Searching
                            ?
                            <SearchResult result={this.state.search_result} status={this.state.status}  />
                            :
                            <SearchResult result={this.props.result} status={this.props.status} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage

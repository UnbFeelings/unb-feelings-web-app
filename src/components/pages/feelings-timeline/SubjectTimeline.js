import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    root: {
        maxWidth: '800px',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        marginLeft: '20%',
        marginRight: '20%',

    },

    hashtag: {
        color: '#336799',
    },
    
    formControl: {
        maxWidth: '800px',
        width: '100%',
        hight: '200px',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '10px',
        minWidth: 120,
        backgroundColor: 'white',
    },
});

class SubjectTimeline extends React.Component{

    state = {
        selected_subject: 1,
        subj_posts:[],
        subject_list: [],
        open: false,
    };

    handleChange = event => {
        console.log(event.target.value)
        this.setState({
            selected_subject: event.target.value
        });
        this.fetchPosts();
    };

    handleClose = () => {
        this.setState({ open: false });
    };

  handleOpen = () => {
        this.setState({ open: true });
    };

    async componentWillMount() {
    
        this.fetchPosts()
        this.fetchSubjects()

    }

    async fetchPosts(){
        //fetching posts
        console.log("Fetching posts")
        console.log(this.state.selected_subject)
        try {
            const response = await fetch(`http://localhost:8000/api/posts/subject/${this.state.selected_subject}/`);
            const subj_posts = await response.json();
            this.setState({
                subj_posts
            });
            //console.log(this.state.subj_posts)
        } catch (e) {
            console.log(e);
        }
    }

    async fetchSubjects(){
       //fetching subjects for selection
       try {
           const response = await fetch(`http://localhost:8000/api/subjects/`);
           const subject_list = await response.json();
           this.setState({
               subject_list
           });
           //console.log(this.state.subject_list)
       } catch (e) {
           console.log(e);
       }
    }


    renderSubjectSelecter(){
        const { classes } = this.props;
        return(
            <form autoComplete="off">
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="controlled-open-select">Disciplina</InputLabel>

                <Select
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.state.selected_subject}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'selected_subject',
                    id: 'selected_subject',
                    }}
                >
                    {this.state.subject_list.results.map(sub =>
                        <MenuItem key={sub.id} value={sub.id}>{sub.name}</MenuItem>)}
                </Select>
                </FormControl>
            </form>
        )
    }

    renderPosts(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                {this.state.subj_posts.results.map((post => (
                    <div key={post.id}>
                        <List component="nav" >
                        <ListItem>
                            <Avatar src="http://br.kogstatic.com/gen_images/b4/ab/b4abd72f6c8a4f20b755c475ddccd85a.png" />
                            <ListItemText inset primary="Nome aleatório" secondary="dd de maio de YYYY" />
                            <ListItemText primary={post.content}/>
                            <p className={classes.hashtag}> #triste </p>
                        </ListItem>
                        </List>
                        <Divider />
                    </div>
                )))}
            </div>
      );
    }

    render(){
        // o código abaixo funciona como 2 ifs para chamar renderizar
        //apenas quando os dados da API já estiverem carregados
        return (
          <div>
            {this.state.subject_list.results !== undefined &&
                    this.renderSubjectSelecter()}

            { this.state.subj_posts.results !== undefined &&
                this.renderPosts()}
          </div>
        );
    }
}

export default withStyles(styles)(SubjectTimeline);

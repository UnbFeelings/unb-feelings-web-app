import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

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

    dropdown: {
        maxWidth: '800px',
        width: '100%',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '10px',
        marginBottom: '10px',
    }
});

class SubjectTimeline extends React.Component{

    state = {
        selected_subject: 1,
        subj_posts:[],
        subject_list: [],
    };

    async componentWillMount() {
    
        //fetching posts
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
            <div className={classes.dropdown}>
                <select
                    id="postSubject"
                    name="subject"
                    className="form-control"
                    onChange={this.handleInput}
                >
                    <option value="-1" key="-1">Selecione uma disciplina</option>

                    {this.state.subject_list.results.map(sub =>
                    <option key={sub.id} value={sub.id}>{sub.name}</option>)}
                </select>
            </div>
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
        // o código abaixo funciona como um if para chamar o renderPosts
        //apenas quando os dados da API já estiverem carregados
        console.log(this.state.subject_list.results)
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

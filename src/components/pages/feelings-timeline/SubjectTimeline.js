import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 5,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    paragraph: {
        paddingLeft: theme.spacing.unit * 6,
        fontStyle: 'italic',
        textAlign: 'justify',
        fontSize: 12,
    },
    hashtag: {
        color: '#336799',
    },
});

class SubjectTimeline extends React.Component{

    state = {
        subj_posts:[]
    };

    async componentWillMount() {
      try {
        const response = await fetch('http://localhost:8000/api/posts/subject/1/');
        const subj_posts = await response.json();
        this.setState({
          subj_posts
        });
        //console.log(this.state.subj_posts)
      } catch (e) {
        console.log(e);
      }

    }

    renderPosts(){
      return (
        <ul>
            {this.state.subj_posts.results.map((post => (
                <div key={post.id}>
                    <p>{post.content}</p>
                    <p>{post.subject}</p>
                </div>
            )))}
        </ul>
      );
    }

    render(){
        console.log('RENDER');
        console.log(this.state.subj_posts.results);
        // o código abaixo funciona como um if para chamar o renderPosts
        //apenas quando os dados da API já estiverem carregados
        return (
          <div>
            { this.state.subj_posts.results !== undefined &&
                this.renderPosts()}
          </div>
        );
    }
}

export default withStyles(styles)(SubjectTimeline);

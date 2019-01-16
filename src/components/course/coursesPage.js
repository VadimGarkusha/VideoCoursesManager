import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import toastr from 'toastr';

class CoursesPage extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            deleting: {isDeleting:false, courseId: null}
        };
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    async deleteCourse(course){
        this.setState({deleting: {isDeleting:true, courseId: course.id}});
        await this.props.actions.deleteCourse(course)
        .catch(error => {
            this.setState({deleting: {isDeleting: false}});
            toastr.error(error);});
        this.setState({deleting: {isDeleting: false}});
        toastr.success('Course deleted');
    }

    render(){
        const {courses} = this.props;

        return(
             <div>
                <h1>Courses</h1>
                <input type='submit'
                    value='Add Course'
                    className='btn btn-primary'
                    onClick={this.redirectToAddCoursePage}/>
                <CourseList courses = {courses} 
                deleteCourse = {this.deleteCourse}
                deleting = {this.state.deleting}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
/**
 * Created by Itamar on 3/29/2017.
 */
function classroom(){
    var students = [];
    return {
        addStudent : function (name) {
            students.push(name);
        },
        print : function (){
            for(var student of students){
                console.log(student);
            }
        }
    }
}

var class1 = classroom();
var class2 = classroom();
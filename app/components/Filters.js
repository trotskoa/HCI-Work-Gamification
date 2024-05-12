import { React, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/Filters.styles';

export default ProfileFilters = ({users, userId, onPress}) => {

        const [selectedTag, setSelectedTag] = useState("All");
    
        const tags = ["All", "Registered", "In Progress", "Completed"]; 
        const handleTagPress = (tag) => {
            setSelectedTag(tag);
            const user = users.find(user => user.id === userId);
            if (!user) return; // Handle user not found
            let filteredCourses;
                switch (tag) {
                    case "All":
                        filteredCourses = user.courses;
                        break;
                    case "Registered":
                        filteredCourses = user.courses.filter(course => course.status === "Registered");
                        break;
                    case "In Progress":
                        filteredCourses = user.courses.filter(course => course.status === "In Progress");
                        break;
                    case "Completed":
                        filteredCourses = user.courses.filter(course => course.status === "Completed");
                        break;
                    default:
                        filteredCourses = [];
                        break;
                }
                onPress(filteredCourses);
        };
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            <View style={styles.tagContainer}>
                {tags.map((tag, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleTagPress(tag)}
                        style={[
                            styles.tags,
                            selectedTag === tag && styles.tagsSelected
                        ]}>
                        <Text style={[styles.tagsText, selectedTag === tag && styles.tagsTextSelected]}>{tag}</Text>
                        </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
};
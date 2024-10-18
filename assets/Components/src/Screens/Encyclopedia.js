import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground,Dimensions } from 'react-native';
import { en } from './Encyclopedia.screen/en';
const Encyclopedia = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);
  const handleCategoryPress = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedSubCategory(null); // Collapse subcategories when changing categories
  };
  const handleSubCategoryPress = (subCategoryId) => {
    setExpandedSubCategory(expandedSubCategory === subCategoryId ? null : subCategoryId);
  };
  return (
    <ImageBackground
    source={require('../../../../assets/Images/Backgrounds/desert-default.png')}
    style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {en.categories.allIds.map((categoryId) => {
          const category = en.categories.byId[categoryId];
          // Ensure the category exists
          if (!category) {
            console.warn(`Category with ID ${categoryId} not found.`);
            return null; // Skip this category if not found
          }
          return (
            <View key={categoryId} style={styles.category}>
              <TouchableOpacity onPress={() => handleCategoryPress(categoryId)}>
                <Text style={styles.categoryTitle}>
                  {category.name} {category.tags.primary.emoji}
                </Text>
              </TouchableOpacity>
              {/* Show subcategories when the category is expanded */}
              {expandedCategory === categoryId && (
                <View style={styles.subCategoryContainer}>
                  {category.subCategories.map((subCategoryId) => {
                    const subCategory = en.subCategories.byId[subCategoryId];
                    // Ensure the subcategory exists
                    if (!subCategory) {
                      console.warn(`Subcategory with ID ${subCategoryId} not found.`);
                      return null; // Skip this subcategory if not found
                    }
                    return (
                      <View key={subCategoryId} style={styles.subCategory}>
                        <TouchableOpacity onPress={() => handleSubCategoryPress(subCategoryId)}>
                          <Text style={styles.subCategoryTitle}>
                            {subCategory.name}
                          </Text>
                        </TouchableOpacity>
                        {/* Show articles when the subcategory is expanded */}
                        {expandedSubCategory === subCategoryId && (
                          <View style={styles.contentContainer}>
                            {subCategory.articles.map((articleId) => {
                              const article = en.articles.byId[articleId];
                              // Ensure the article exists
                              if (!article) {
                                console.warn(`Article with ID ${articleId} not found.`);
                                return null;
                              }
                              return (
                                <View key={articleId} style={styles.article}>
                                  <Text style={styles.articleTitle}>{article.title}</Text>
                                  <Text style={styles.articleContent}>{article.content}</Text>
                                </View>
                              );
                            })}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};
export default Encyclopedia;
const styles = StyleSheet.create({
    background:{
      flex:1,
      resizeMode:'cover',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
    },
    container:{
      padding:20,
    },
    category:{
      marginBottom:8,
      borderRadius:10,
    },
    categoryTitle:{
      fontSize:10,
      fontWeight:'bold',
      color:'#F59A1B',
      padding:10,
      backgroundColor:'#FFFFFF'
    },
    subCategoryContainer:{
      marginLeft:10
    },
    subCategory:{
      marginBottom:8
    },
    subCategoryTitle:{
      fontSize:10,
      fontWeight:'bold',
      color:'#F59A1B',
      padding:10,
      backgroundColor:'#F5F5F5',
      marginBottom:8,
      borderRadius:5,
    },
    contentContainer:{
      marginLeft:10,
      padding:10,
      backgroundColor:'#FFFFFF',
      borderRadius:5,
    },
    article:{
      marginBottom:8,
    },
    articleTitle:{
      fontSize:10,
      fontWeight:'bold',
      color:'#C425A4',
    },
    articleContent:{
      fontSize:10,
      color:'#333',
    }
  })

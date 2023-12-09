package service

import (
	"fmt"
	"testing"
)

var mockUser = UserTest{
	id:   "string",
	name: "test",
}

type mockImpl struct{}

func (m mockImpl) getById(id string) (UserTest, error) {
	return mockUser, nil
}

func TestGetUserById(t *testing.T) {
	var tests = []struct {
		testName string
		id       string
		expected UserTest
	}{
		{"should return a user with a mock implementation", "testUserId", UserTest{name: mockUser.name, id: mockUser.id}},
	}

	for _, tt := range tests {
		testname := fmt.Sprintf("%s", tt.testName)
		t.Run(testname, func(t *testing.T) {
			userService := UserService{
				repo: mockImpl{},
			}
			ans, err := userService.GetUserById(tt.id)
			if ans != tt.expected || err != nil {
				t.Errorf("got %v, want %v", ans, tt.expected)
			}
		})
	}

}
